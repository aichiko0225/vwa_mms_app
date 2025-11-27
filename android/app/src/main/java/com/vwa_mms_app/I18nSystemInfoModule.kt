package com.vwa_mms_app

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Locale

class I18nSystemInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "I18nSystemInfo"
    }

    @ReactMethod
    fun getSystemLanguage(promise: Promise) {
        try {
            val current = reactApplicationContext.resources.configuration.locale
            val language = current.language
            promise.resolve(language)
        } catch (e: Exception) {
            promise.reject("Error", e)
        }
    }
}
