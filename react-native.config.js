module.exports = {
  dependencies: {
    "react-native-recording": {
      root: __dirname,
      platforms: {
        ios: { 
          sourceDir:   "./ios" 
        },
        android: {
          sourceDir:  "./android",
          packageImportPath: "import cn.qiuxiang.react.recording.RecordingPackage;",
          packageInstance: "new RecordingPackage()"
        }
      }
    }
  }
};
