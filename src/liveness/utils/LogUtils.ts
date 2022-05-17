/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

export class LogUtils {
  public static debug(...msg: any[]): void {
    console.log("DEBUG:", msg);
  }

  public static info(...msg: any[]): void {
    console.log("INFO:", msg);
  }

  public static warn(...msg: any[]): void {
    console.warn("WARNING:", msg);
  }

  public static error(...msg: any[]): void {
    console.error("ERROR:", msg);
  }
}
