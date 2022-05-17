# Demo face recognition


Create `public/weights/` directory if not exists.

Download the ML models from [face-api.js library](https://github.com/justadudewhohacks/face-api.js):

```
curl -o public/weights/tiny_face_detector_model-shard1.shard -kL https://github.com/justadudewhohacks/face-api.js/blob/a86f011d72124e5fb93e59d5c4ab98f699dd5c9c/weights/tiny_face_detector_model-shard1?raw=true && \
    echo 'f3020debaf078347b5caaff4bf6dce2f379d20bc *public/weights/tiny_face_detector_model-shard1.shard' | shasum -c && \
    curl -o public/weights/tiny_face_detector_model-weights_manifest.json -kL https://github.com/justadudewhohacks/face-api.js/blob/a86f011d72124e5fb93e59d5c4ab98f699dd5c9c/weights/tiny_face_detector_model-weights_manifest.json?raw=true && \
    echo '1f9da0ddb847fcd512cb0511f6d6c90985d011e6 *public/weights/tiny_face_detector_model-weights_manifest.json' | shasum -c && \
    curl -o public/weights/face_landmark_68_model-shard1.shard -kL https://github.com/justadudewhohacks/face-api.js/blob/a86f011d72124e5fb93e59d5c4ab98f699dd5c9c/weights/face_landmark_68_model-shard1?raw=true && \
    echo 'e8b453a3ce2a66e6fa070d4e30cd4e91c911964b *public/weights/face_landmark_68_model-shard1.shard' | shasum -c && \
    curl -o public/weights/face_landmark_68_model-weights_manifest.json -kL https://github.com/justadudewhohacks/face-api.js/blob/a86f011d72124e5fb93e59d5c4ab98f699dd5c9c/weights/face_landmark_68_model-weights_manifest.json?raw=true && \
    echo 'a981c7adfc6366e7b51b6c83b3bb84961a9a4b15 *public/weights/face_landmark_68_model-weights_manifest.json' | shasum -c
```

Change the models' paths in the manifests:

```
perl -i -pe 's/tiny_face_detector_model-shard1/tiny_face_detector_model-shard1.shard/g' public/weights/tiny_face_detector_model-weights_manifest.json
perl -i -pe 's/face_landmark_68_model-shard1/face_landmark_68_model-shard1.shard/g' public/weights/face_landmark_68_model-weights_manifest.json
```
