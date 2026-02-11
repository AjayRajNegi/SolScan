import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  const [fromAmount, setFromAmount] = useState("100");
  const [toAmount, setToAmount] = useState("0.28014");
  const [fromToken, setFromToken] = useState("USDC");
  const [toToken, setToToken] = useState("SOL");

  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleSwap = () => {
    if (!fromAmount) return Alert.alert("Enter an amount");
    Alert.alert(
      "Swap",
      `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
    );
  };

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.mainView}>
        <Text style={s.title}>Swap Token</Text>

        <View style={s.swapView}>
          {/* From View */}
          <View style={s.fromView}>
            {/* Left View */}
            <View style={s.left}>
              <TouchableOpacity style={s.tokenBtn}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 100,
                    paddingHorizontal: 6,
                  }}
                >
                  <Text style={{ color: "black", fontSize: 15 }}>S</Text>
                </View>
                <Text style={{ color: "white" }}>{fromToken}</Text>
                <Ionicons name="chevron-down" size={18} color="#888" />
              </TouchableOpacity>
              <Text style={{ color: "#a8aab3", fontSize: 14, marginTop: 10 }}>
                Balance: 0.00061 {fromToken}
              </Text>
            </View>

            {/* Right View */}
            <View style={s.right}>
              <TextInput
                style={{
                  fontSize: 26,
                  color: "white",
                  textAlign: "right",
                  padding: 0,
                }}
                value={fromAmount}
                onChangeText={setFromAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#666"
              />
              <Text
                style={{
                  color: "#a8aab3",
                  fontSize: 14,
                  marginTop: 8,
                  textAlign: "right",
                }}
              >
                $499.03
              </Text>
            </View>
          </View>

          {/* Swap Arrow */}
          <View style={{ marginHorizontal: "auto", zIndex: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                marginTop: -15,
                borderRadius: 12,
              }}
              onPress={swapTokens}
            >
              <Ionicons name="arrow-down" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          {/* From View */}
          <View style={s.toView}>
            {/* Left View */}
            <View style={s.left}>
              <TouchableOpacity style={s.tokenBtn}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 100,
                    paddingHorizontal: 6,
                  }}
                >
                  <Text style={{ color: "black", fontSize: 15 }}>S</Text>
                </View>
                <Text style={{ color: "white" }}>{toToken}</Text>
                <Ionicons name="chevron-down" size={18} color="#888" />
              </TouchableOpacity>
              <Text style={{ color: "#a8aab3", fontSize: 14, marginTop: 10 }}>
                Balance: 24.1 {toToken}
              </Text>
            </View>

            {/* Right View */}
            <View style={s.right}>
              <TextInput
                style={{
                  fontSize: 26,
                  color: "white",
                  textAlign: "right",
                  padding: 0,
                  margin: 0,
                }}
                value={toAmount}
                onChangeText={setToAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#666"
              />
              <Text
                style={{
                  color: "#a8aab3",
                  fontSize: 14,
                  marginTop: 8,
                  textAlign: "right",
                }}
              >
                $79.03
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSwap}
            style={{
              backgroundColor: "#14F195",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 0,
                fontWeight: 600,
                paddingVertical: 10,
              }}
            >
              Swap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainView: {
    height: "auto",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    paddingBottom: 10,
    color: "white",
    letterSpacing: 0,
  },
  swapView: {},
  fromView: {
    flexDirection: "row",
    backgroundColor: "#181818",
    padding: 15,
    borderRadius: 20,
  },
  toView: {
    flexDirection: "row",
    backgroundColor: "#181818",
    padding: 15,
    borderRadius: 20,
    marginTop: -20,
  },
  left: { width: "50%" },
  right: { width: "50%" },
  tokenBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 6,
    width: 100,
    borderRadius: 50,
  },
});
