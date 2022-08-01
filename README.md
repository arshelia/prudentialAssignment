# How to start?
> please use ios
- yarn install
- cd ios && pod install && cd../
- yarn start
- yarn ios

# Online demo


# Q&A
## 1.What are the technologist and why?
- react-native
Wihtin this framework, we can develop android and ios.
- react-navigation
Make route config between pages.
- react-native-svg
I use  svg to format icons.
- react-native-linear-gradient
When Hovered, the ScoreItem's backgroud turn to be lineargradient.
- react-native-animatable
When MindRecored page mounted, the ScoreItem need to be animated.

## 2.How do you provide the updated version quickly to the customer?
> reference to http://code-push.cn/docs/1100.htm
In App.js, add versionCheck function in `componentDidMount`.If we can get a new new version, leads customer to download new version.