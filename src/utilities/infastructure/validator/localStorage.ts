import AsyncStorage from '@react-native-community/async-storage';

const isString = (key: string) => typeof key === 'string';

export async function saveToStorage(key: string, value: any) {
    if (!key || !isString(key) || value === undefined) return;
    else await AsyncStorage.setItem(key, value);
}

export async function getFromStorage(key: string) {
    if (!key || !isString(key)) return;
    else return await AsyncStorage.getItem(key);
}

export const removeFromStorage = async (key: string) => {
    if (!key || !isString(key)) return;
    return await AsyncStorage.removeItem(key);
};
