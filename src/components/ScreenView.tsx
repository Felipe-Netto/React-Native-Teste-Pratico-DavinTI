import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { theme } from "../constants/theme";

export default function ScreenView({ children, style }: { children: React.ReactNode, style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
});