import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Index = () => {
  const [theme, settheme] = useState(false);
  const [result, setresult] = useState("00");
  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };
  const calculate = ({ Content }) => {
    if (Content == "C") {
      setresult("");
    } else if (Content == "DEL") {
      setresult(result.substring(0, result.length - 1));
    } else if (Content == "=") {
      const ans = Number(eval(result).toFixed(3)).toString;
      setresult(ans);
    } else {
      setresult(result + Content);
    }
  };
  const MyButton = ({ Content, type }) => {
    return (
      <GestureHandlerRootView style={{}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: getcolor(colors.dark1, colors.light1),
            borderRadius: 20,
            padding: 13,
            margin: 9,
            elevation: theme ? 2 : 5,
          }}
          onPress={() => calculate({ Content })}
        >
          <Text
            style={{
              fontWeight: "700",
              textAlign: "center",
              fontSize: 38,
              textAlignVertical: "center",
              width: 70,
              height: 80,
              color: get_btn_color(type),
            }}
          >
            {Content}
          </Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
    );
  };
  const get_btn_color = (type) => {
    if (type == "top") {
      return "#35FBD6";
    } else if (type == "left") {
      return "#EB6363";
    } else {
      return getcolor(colors.light, colors.dark);
    }
  };

  const getcolor = (light, dark) => (theme ? dark : light);
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: theme ? colors.light : colors.dark,
        alignItems: "center",
      }}
    >
      <Switch
        value={theme}
        onValueChange={() => settheme(!theme)}
        thumbColor={getcolor(colors.light, colors.dark)}
        trackColor={{ true: colors.dark, false: colors.light }}
      />
      <Text
        style={{
          backgroundColor: getcolor(colors.dark, colors.light),
          width: 450,
          height: 80,
          borderRadius: 30,
          textAlign: "right",
          fontSize: 50,
          color: getcolor(colors.light, colors.dark),
          marginTop: 90,
          paddingBottom: 10,
        }}
      >
        {result}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 10,
          marginBottom: 0,
          paddingTop: 20,
          paddingBottom: 0,
          justifyContent: "center",
          backgroundColor: getcolor(colors.dark, colors.light2),
        }}
      >
        <MyButton Content="C" type="top" />
        <MyButton Content="DEL" type="top" />
        <MyButton Content="/" type="top" />
        <MyButton Content="%" type="top" />
        <MyButton Content="7" type="num" />
        <MyButton Content="8" type="num" />
        <MyButton Content="9" type="num" />
        <MyButton Content="*" type="left" />
        <MyButton Content="4" type="num" />
        <MyButton Content="5" type="num" />
        <MyButton Content="6" type="num" />
        <MyButton Content="-" type="left" />
        <MyButton Content="1" type="num" />
        <MyButton Content="2" type="num" />
        <MyButton Content="3" type="num" />
        <MyButton Content="+" type="left" />
        <MyButton Content="00" type="num" />
        <MyButton Content="0" type="num" />
        <MyButton Content="." type="num" />
        <MyButton Content="=" type="left" />
      </View>
    </View>
  );
};

export default Index;
