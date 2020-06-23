import {StyleSheet, StatusBar} from 'react-native'
export default StyleSheet.create({
	estilo1: {
        /*marginTop: 20,   */ 
        backgroundColor: "orange", 
        flex: 1,
        padding:8,

    },
    
    view1: {
        flex: 1,
        flexDirection: 'row', 
    },
    view1_1: {
        flex: 1,
        backgroundColor: '#832a0d',
    },
    view1_2: {
        flex: 1,
        backgroundColor: '#A0522D',
    },
    view1_3: {
        flex: 1,
        backgroundColor: '#F4A460',
    },
    view1_4: {
        flex: 1,
        backgroundColor: '#BDB76B',
    },
    
    view2: {
        flex: 1,
        backgroundColor: '#FFDEAD', 
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 7,       
    },
    view2_font: {
        color: '#000000',
        fontSize: 22,   
    },

    view3: {
        flex: 6,
        backgroundColor: '#FFDEAD',
        borderBottomWidth: 7,
        flexDirection: 'row', 
 
    },
    view3_1: {
        flex: 6,
    },
    view3_2: {
        flex: 4,
        borderWidth: 2,  
        padding: 4, 
    },
    view3_font: {
        fontSize: 17,          
    },
    view3_image: {
        flex: 1,
        width: undefined,
        height: undefined,    
           
    },

    view4: {
        flex: 7,
        backgroundColor: '#FFDEAD',
        borderBottomWidth: 7,
    },

    view5: {
        flex: 1,
        backgroundColor: '#FFFFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view5_font: {
        fontSize: 15,   
    },

})
