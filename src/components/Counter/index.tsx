import { Text, View } from "react-native";
import { styles } from "./styles";

type CounterProps = {
    count?: number
}
export function Counter({ count }: CounterProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.countText}>{count}</Text>
        </View>
    )
}