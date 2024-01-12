import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const EmployeeList = () => {
  const width = useSharedValue(80);
  const titleWidth = useSharedValue(40);
  const arrowRotation = useSharedValue("0deg");
  const selectionY = useSharedValue(0);
  const selectRadius = useSharedValue(50);
  const selectWidth = useSharedValue(40);
  const textVisible = useSharedValue(0)

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, { duration: 500 })
    }
  });

  const animatedTitleView = useAnimatedStyle(() => {
    return {
      width: withTiming(titleWidth.value, { duration: 500 })
    }
  });

  const arrowStyle = useAnimatedStyle(() => {
    return{
      transform:[{rotate:withTiming(arrowRotation.value,{duration:1000,},)}]
    }
  })

  const selectionBox = useAnimatedStyle(() => {
    return {
      transform:[{translateY:withTiming(selectionY.value,{duration:500})}],
      borderRadius:withTiming(selectRadius.value,{duration:500}),
      width:withTiming(selectWidth.value,{duration:500})
    }
  });
  const titleText = useAnimatedStyle(() => {
    return {
      opacity: withTiming(textVisible.value , { duration: 500 }),
    };
  });

 

  const openBox = () => {
    width.value = width.value == 80?200:80;
    titleWidth.value = titleWidth.value == 40?170:40;
    arrowRotation.value = arrowRotation.value == "0deg"?"180deg":"0deg";
    selectRadius.value = selectRadius.value == 50?10:50
    selectWidth.value = selectWidth.value == 40?150:40;
    textVisible.value = textVisible.value  == 1? 0 : 1
  };

  const Button = ({ icon, title }: any) => {
    const menuRef:any = useRef(null);

    const handlePress = () => {
        if (menuRef.current) {
            menuRef.current.measure((x, y, width, height, pageX, pageY) => {
              selectionY.value = withTiming((y+15),{duration:500});
            });
        }
    };
    return (
      <AnimatedTouchableOpacity style={[styles.box,animatedTitleView]} onPress={handlePress} ref={menuRef}>
        <Icons name={icon} color={"#f2f2f2"} size={20} />
        <Animated.Text style={[styles.buttonText,titleText]}>{title}</Animated.Text>
      </AnimatedTouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.dashboard, animatedWidth]}>
        <View style={styles.menuBox}>
          
          <Animated.View style={[styles.overBox,selectionBox]}> 
                
          </Animated.View>
          
          <Button icon={"home"} title={"Home"} />
          <Button icon={"notifications"} title={"Notification"} />
          <Button icon={"bookmark"} title={"Save"} />
          <Button icon={"cloud-download"} title={"Download"} />
          <Button icon={"folder"} title={"File"} />
          <Button icon={"person"} title={"Profile"} />
          <Button icon={"settings"} title={"Settings"} />
          <Button icon={"mail"} title={"Mail"} />
          <Button icon={"exit"} title={"Log Out"} />
        </View>
        <AnimatedTouchableOpacity onPress={openBox} style={arrowStyle}>
          <Icons name={"chevron-forward"} size={20} color={"white"}/>
        </AnimatedTouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

export default EmployeeList