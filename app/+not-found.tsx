import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

// ? Находится в рутовой директории, чтобы всегда отображаться поверз вложенных скринов. Изучить, как это работает!
export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={styles.container}>
                {
                    // ! ПРи переходе на Home в хедере появляется стрелка назад, ведущая к странице NotFoundScreen!
                }
                <Link href="/" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
