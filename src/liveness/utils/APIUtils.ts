/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConfigUtils } from "./ConfigUtils";
import { MediaUtils } from "./MediaUtils";
import { LogUtils } from "./LogUtils";
import { API } from "./API";

export interface ChallengeMetadata {
  readonly id: string;
  readonly token: string;
  readonly type: string;
  readonly params: unknown;
}

export interface ChallengeResult {
  readonly success: boolean;
}

export class APIUtils {
  static async getAuthorizationHeader() {
    return {
      // Aqui usabamos el token de amplify
      Authorization: `Bearer ABCD1234`
    };
  }

  static async startChallenge(challengeType: string): Promise<ChallengeMetadata> {
    const path = ConfigUtils.getConfig().API_START_ENDPOINT;
    const init = {
      headers: await APIUtils.getAuthorizationHeader(),
      body: {
        imageWidth: MediaUtils.getMediaStreamInfo().actualWidth,
        imageHeight: MediaUtils.getMediaStreamInfo().actualHeight
      }
    };

    if (challengeType) {
      // @ts-ignore
      init.body["challengeType"] = challengeType;
    }

    LogUtils.info("startChallenge:");
    LogUtils.info(init);
    return API.post(ConfigUtils.getConfig().API_NAME, path, init).then(result => {
      LogUtils.info(result);
      return result;
    });
  }

  static async putChallengeFrame(
    challengeId: string,
    token: string,
    frameBase64: string,
    timestamp: number
  ): Promise<void> {
    const path: string = ConfigUtils.getConfig().API_FRAMES_ENDPOINT_PATTERN.replace("{challengeId}", challengeId);
    const init = {
      headers: await APIUtils.getAuthorizationHeader(),
      body: {
        token: token,
        timestamp: timestamp,
        frameBase64: frameBase64
      }
    };
    LogUtils.info("putChallengeFrame:");
    LogUtils.info(init);
    return API.put(ConfigUtils.getConfig().API_NAME, path, init).then(result => {
      LogUtils.info(result);
      return result;
    });
  }

  static async verifyChallenge(challengeId: string, token: string): Promise<ChallengeResult> {
    const path: string = ConfigUtils.getConfig().API_VERIFY_ENDPOINT_PATTERN;
    const init = {
      headers: await APIUtils.getAuthorizationHeader(),
      body: {
        token: token
      }
    };
    LogUtils.info("verifyChallenge");
    LogUtils.info(init);
    return API.post(ConfigUtils.getConfig().API_NAME, path, init).then(result => {
      LogUtils.info(result);
      return result;
    });
  }
}
