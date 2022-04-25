import React,{useState,useEffect} from 'react';
import {styles,button} from "../../utils/styles";
import { View, Text,Image,Button, ScrollView,Alert, StatusBar, Platform, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import {Avatar} from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import colors from '../../utils/colors';
// const { status } = await Contacts.requestPermissionsAsync();
const contact = [
    {
        "company": "",
        "department": "",
        "displayName": "olalerephilip@gmail.com",
        "emailAddresses": [
            [Object
            ],
            [Object
            ],
            [Object
            ]
        ],
        "familyName": "",
        "givenName": "olalerephilip@gmail.com",
        "hasThumbnail": false,
        "jobTitle": "",
        "middleName": "",
        "note": "",
        "phoneNumbers": [],
        "postalAddresses": [],
        "prefix": "",
        "rawContactId": "9223372034707292161",
        "recordID": "9223372034707292161",
        "suffix": "",
        "thumbnailPath": "",
        "urlAddresses": []
    },
    {
        "company": "",
        "department": "",
        "displayName": "+2348109836231",
        "emailAddresses": [],
        "familyName": "",
        "givenName": "+2348109836231",
        "hasThumbnail": false,
        "jobTitle": "",
        "middleName": "",
        "note": "",
        "phoneNumbers": [
            [Object
            ],
            [Object
            ]
        ],
        "postalAddresses": [],
        "prefix": null,
        "rawContactId": "8799",
        "recordID": "2",
        "suffix": null,
        "thumbnailPath": "",
        "urlAddresses": []
    },
    {
        "company": "",
        "department": "",
        "displayName": "ave",
        "emailAddresses": [],
        "familyName": "",
        "givenName": "ave",
        "hasThumbnail": false,
        "jobTitle": "",
        "middleName": "",
        "note": "",
        "phoneNumbers": [
            [Object
            ],
            [Object
            ]
        ],
        "postalAddresses": [],
        "prefix": null,
        "rawContactId": "8813",
        "recordID": "4",
        "suffix": null,
        "thumbnailPath": "",
        "urlAddresses": []
    },
    {
        "company": "",
        "department": "",
        "displayName": "Benjamin cs",
        "emailAddresses": [],
        "familyName": "cs",
        "givenName": "Benjamin",
        "hasThumbnail": false,
        "jobTitle": "",
        "middleName": "",
        "note": "",
        "phoneNumbers": [
            [Object
            ],
            [Object
            ]
        ],
        "postalAddresses": [],
        "prefix": null,
        "rawContactId": "8800",
        "recordID": "5",
        "suffix": null,
        "thumbnailPath": "",
        "urlAddresses": []
    },
    
]

const handleSubmitSend =()=>{

}

function Contact({}){
    // const [contact, setContacts] = useState(null);
    useEffect(() => {
    //    if(Platform.OS === "ios"){
    //        Contacts.getAll((err, contact)=>{

            
    //            if(err){
    //                throw err;
    //            }
    //            setContacts(contact);
    //        })
    //    }else if(Platform.OS === "android"){
    //        PermissionsAndroid.request(
               
    //            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //            {
    //                title:"Contacts",
    //                message:"Monie App will like to view your contact"
    //            }

            
    //        ).then(()=>{
    //             Contacts.getAll((err,contact)=>{
    //                 if(err === "denied"){
    //                     console.log("Denied")
    //                     // console.log(contact)
    //                 }else{
    //                     console.log("foundContact")
    //                     setContacts(contact)
    //                     console.log("Contact",contact)
    //                 }
    //             })
    //        })
    //    }
        
    }, []);

    const getCont =()=>{
        Contacts.getAll().then(contacts => {
            console.log(contacts);
            // contacts returned
          })
    }
    let num = 0;

    return (
    <View style = {[styles.container]}>
        <View style ={{}}>
            <Avatar.Image 
                source={{
                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }}
                size={50}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator = {false}>
            {contact && contact.map((data,key)=>(
                
                <View key = {num+=1}>
            
                    
                    <View style = {{flexDirection:"row",justifyContent:'space-between'}}>
                        <View style = {{flexDirection:"row",marginTop:40}}>
                            <View style ={{}}>
                                <Avatar.Image 
                                    
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                
                            </View>

                            <View style ={{marginLeft:10,}}>
                                <Text>Phillip Olalere</Text>
                                <Text>+2347035666498</Text>
                            </View>
                        </View>


                        <View style = {{marginTop:40,borderWidth:1,borderColor:"#E0E0E0", width:20,height:20,borderRadius:16}}> 
                            
                        </View>
                    </View>
                    
                

                </View>))
            
            }

            <ButtonComponent
                title="Request"
                styleButton={{borderRadius:16,width:312,backgroundColor:colors.SECONDARY}}
                onPress={handleSubmitSend}
                buttonTittle={{color:"#FFFFFF",fontSize:14,fontWeight:"800"}}
            />
        </ScrollView>
    </View>
   
    
    )
    
}

export default Contact;