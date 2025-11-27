import Foundation
import React

@objc(I18nSystemInfo)
class I18nSystemInfo: NSObject {

  @objc
  func getSystemLanguage(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let language = Locale.preferredLanguages.first ?? "en"
    resolve(language)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
