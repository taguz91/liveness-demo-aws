import { ChallengeMetadata } from "./APIUtils";
import { ConfigUtils } from "./ConfigUtils";

export class API {
  static async post(endpoint: string, path: string, init: Record<string, any>): Promise<any> {
    if (path === ConfigUtils.getConfig().API_START_ENDPOINT) {
      const imgWidth = init.body["imageWidth"];
      const imgHeight = init.body["imageHeight"];

      return new Promise<any>(resolve => {
        setTimeout(() => {
          const [noseX, noseY, noseW, noseH] = API.getNoseBox(imgWidth, imgHeight);
          const [areaX, areaY, areaW, areaH] = API.getAreaBox(imgWidth, imgHeight);
          return resolve({
            id: "12345678",
            token: "ABCD1234",
            type: init.body["challengeType"],
            params: {
              imageHeight: imgHeight,
              imageWidth: imgWidth,
              areaWidth: areaW,
              areaHeight: areaH,
              areaLeft: areaX,
              areaTop: areaY,
              minFaceAreaPercent: 40,
              noseLeft: noseX,
              noseTop: noseY,
              noseWidth: noseW,
              noseHeight: noseH
            }
          } as ChallengeMetadata);
        }, 5000);
      });
    } else if (path === ConfigUtils.getConfig().API_VERIFY_ENDPOINT_PATTERN) {
      return new Promise<any>(resolve => {
        setTimeout(() => {
          resolve({
            success: true
          });
        }, 1500);
      });
    }

    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({});
      }, 1500);
    });
  }

  static async put(endpoint: string, path: string, init: Record<string, any>): Promise<any> {
    return {
      type: "PUT",
      endpoint,
      path,
      init
    };
  }

  static getAreaBox(imageWidth: number, imageHeight: number) {
    const areaHeight = imageHeight * 0.75;
    const areaWidth = Math.min(imageWidth * 0.75, imageHeight * 0.75);
    const areaLleft = imageWidth / 2 - areaWidth / 2;
    const areaTop = imageHeight / 2 - areaHeight / 2;

    return [areaLleft, areaTop, areaWidth, areaHeight];
  }

  static getNoseBox(imageWidth: number, imageHeight: number) {
    const width = 20;
    const height = 20;

    const multiplier = 1;
    const left = imageWidth / 2 + multiplier * 45;
    const multiplier2 = -1;
    const top = imageHeight / 2 + multiplier2 * 40 - height;

    return [left, top, width, height];
  }
}
