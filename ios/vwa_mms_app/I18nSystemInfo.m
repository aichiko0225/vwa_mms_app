#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(I18nSystemInfo, NSObject)

RCT_EXTERN_METHOD(getSystemLanguage:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
