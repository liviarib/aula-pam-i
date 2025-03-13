import { StyleSheet } from 'react-native'; 

import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        borderRadius: 10, 
        padding: 8,
        alignItems: 'center',

    }, 
    titulo:{
        fontSize: RFPercentage(4),
        borderWidth: 3,
        marginTop: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'darkslategrey',
        borderColor: 'darkslategray',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
    }
});

export default styles;