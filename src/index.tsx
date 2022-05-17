/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import ReactDOM from "react-dom";

import LivenessDetection from "./liveness/LivenessDetection";

ReactDOM.render(
  <React.StrictMode>
    <LivenessDetection />
  </React.StrictMode>,
  document.getElementById("root")
);
