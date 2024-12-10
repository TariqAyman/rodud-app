import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import api from '../services/api';

export default function NewOrderScreen({ navigation }) {
    const [pickup_location, setPickupLocation] = useState('');
    const [delivery_location, setDeliveryLocation] = useState('');
    const [pickup_time, setPickupTime] = useState('');
    const [delivery_time, setDeliveryTime] = useState('');
    const [item, setItem] = useState('');
    const [size, setSize] = useState('');
    const [wight, setWight] = useState('');

    const createOrder = async () => {
        try {
            await api.post('/orders', {
                pickup_location,
                delivery_location,
                pickup_time,
                delivery_time,
                size,
                item,
                wight
            });
            navigation.navigate('Dashboard');
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Order</Text>
            <TextInput
                style={styles.input}
                placeholder="Pickup Location"
                value={pickup_location}
                onChangeText={setPickupLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Delivery Location"
                value={delivery_location}
                onChangeText={setDeliveryLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Item"
                value={item}
                onChangeText={setItem}
            />
            <TextInput
                style={styles.input}
                placeholder="Size"
                value={size}
                onChangeText={setSize}
            />
            <TextInput
                style={styles.input}
                placeholder="Wight"
                value={wight}
                onChangeText={setWight}
            />
            <TextInput
                style={styles.input}
                placeholder="Pickup Time (YYYY-MM-DD HH:MM:SS)"
                value={pickup_time}
                onChangeText={setPickupTime}
            />
            <TextInput
                style={styles.input}
                placeholder="Delivery Time (YYYY-MM-DD HH:MM:SS)"
                value={delivery_time}
                onChangeText={setDeliveryTime}
            />
            <Button title="Submit Order" onPress={createOrder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});
