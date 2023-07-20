


import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import { FontFamily, FontSize } from '../../theme';
import { AdduserBody } from './components';

const AddUser = () => {
    const [token, setToken] = useState(null);
    const [BranchDD, setBranchDD] = useState([]);
    const [CompanyDD, setCompanyDD] = useState([]);
    const [Roles, setRoles] = useState([]);
    const [inputValues, setInputValues] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            setToken(token);
        };
        getToken();
        const interval = setInterval(() => {
            getCompanydropdown();
            getBranchdropdown();
            getRoledropdown();
        }, 900000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (token) {
            getCompanydropdown();
            getBranchdropdown();
            getRoledropdown();
        }
    }, [token])

    const getCompanydropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownCompanyList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setCompanyDD(result);
        } catch (error) {
            console.error(error);
        }
    };
    const getBranchdropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownBranchList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setBranchDD(result);
            // setBranch(result);
            // setBranch(result[0]?.branch_ID.toString());
        } catch (error) {
            console.error(error);
        }
    };
    const getRoledropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownRoleList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setRoles(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFormSubmit = async (selectedRoles, selectedBranchDD, inputValues,) => {
        try {
            const roles = [];
            selectedRoles?.filter((role) => { roles.push({ role_ID: parseInt(role) }); });

            const branches = [];
            selectedBranchDD?.filter((branch) => { branches.push({ branch_ID: parseInt(branch) }); });
            // console.log('branch', branches, roles)

            console.log("click button")
            console.log("url data url data ", API_ENDPOINTS.UserSubmit + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),)
            const response = await fetch(
                API_ENDPOINTS.UserSubmit + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                    body: JSON.stringify(inputValues),
                }
            );
            console.log(inputValues);
            if (response.ok) {
                const responseData = await response.json();
                const login_ID = responseData.login_ID;
                console.log('POST request successful.', login_ID);
            } else {
                console.warn('Error sending items to the server. Status:', response.status);
                const massage = await response.text()
                console.log(massage)
            }
            console.log("post api data")
        }
        catch (error) {
            console.error('Error sending items to the server:', error);
        };

    }
    return (
        <View>
            <AdduserBody Roles={Roles} BranchDD={BranchDD} CompanyDD={CompanyDD} handleFormSubmit={handleFormSubmit} setInputValues={setInputValues} />
        </View>
    )
};
export default AddUser;



// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import CheckBox from '@react-native-community/checkbox';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { SelectList } from 'react-native-dropdown-select-list'
// import { MultipleSelectList } from 'react-native-dropdown-select-list'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_ENDPOINTS } from '../constants';
// import { Style } from './drawer';
// // import { FontFamily, FontSize } from '../theme';


// const AddUser = () => {
//     const [token, setToken] = useState(null);

//     const [Name, setName] = useState('');
//     const [Email, setEmail] = useState('');
//     const [login_Name, setlogin_Name] = useState('');
//     const [Password, setPassword] = useState('');
//     const [PhoneNo, setPhoneNo] = useState('');
//     const [ExtNo, setExtNo] = useState('');
//     const [CallNo, setCallNo] = useState('');
//     const [GtalkID, setGtalkID] = useState('');
//     const [YahooID, setYahooId] = useState('');
//     const [isStatus, setStatus] = useState(false);
//     const [isTempActive, setTempActive] = useState(false);
//     const [selectedWorkFrom, setSelectedWorkFrom] = useState();
//     const [selecteds, setSelecteds] = useState('');
//     const [CompanyDD, setCompanyDD] = useState([]);
//     const [selectedBranchDD, setSelectedBranchDD] = useState('');
//     const [selectedBranch, setSelectedBranch] = useState('');
//     const [BranchDD, setBranchDD] = useState([]);
//     const [selectedRoles, setSelectedRoles] = useState([]);
//     const [Roles, setRoles] = useState([]);


//     useEffect(() => {
//         const getToken = async () => {
//             const token = await AsyncStorage.getItem('token');
//             setToken(token);
//         };
//         getToken();
//         const interval = setInterval(() => {
//             getCompanydropdown();
//             getBranchdropdown();
//             getRoledropdown();
//         }, 900000);
//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (token) {
//             getCompanydropdown();
//             getBranchdropdown();
//             getRoledropdown();
//         }
//     }, [token])

//     const getCompanydropdown = async () => {
//         try {
//             const response = await fetch(API_ENDPOINTS.DropDownCompanyList, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + token
//                 }
//             });
//             const result = await response.json();
//             setCompanyDD(result);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     const getBranchdropdown = async () => {
//         try {
//             const response = await fetch(API_ENDPOINTS.DropDownBranchList, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + token
//                 }
//             });
//             const result = await response.json();
//             setBranchDD(result);
//             // setBranch(result);
//             // setBranch(result[0]?.branch_ID.toString());
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     const getRoledropdown = async () => {
//         try {
//             const response = await fetch(API_ENDPOINTS.DropDownRoleList, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + token
//                 }
//             });
//             const result = await response.json();
//             setRoles(result);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleFormSubmit = async () => {
//         try {
//             const roles = [];
//             selectedRoles?.forEach((role) => {
//                 roles.push({ role_ID: parseInt(role) });
//             });

//             const branches = [];
//             selectedBranchDD?.forEach((branch) => {
//                 branches.push({ branch_ID: parseInt(branch) });
//             });
//             let obj = BranchDD.find((item) => item.branch_ID === selectedBranch)
//             console.log(obj)
//             const inputValues = {
//                 user_Name: Name,
//                 user_EmailID: Email,
//                 branchName: obj?.branchName,
//                 branch_ID: selectedBranch,
//                 login_Name: login_Name,
//                 login_Password: Password,
//                 temp_Inactive: isTempActive,
//                 user_Cell_No: CallNo,
//                 user_Ext_No: ExtNo,
//                 user_GtalkID: GtalkID,
//                 user_Name: Name,
//                 user_PhoneNo: PhoneNo,
//                 user_Status: isStatus,
//                 user_YahooID: YahooID,
//                 workFrom: selectedWorkFrom
//             };
//             console.log(API_ENDPOINTS.UserSubmit + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),)
//             const response = await fetch(
//                 API_ENDPOINTS.UserSubmit + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: 'Bearer ' + token,
//                     },
//                     body: JSON.stringify(inputValues),
//                 }
//             );
//             notification();
//             console.log(inputValues);
//             if (response.ok) {
//                 const responseData = await response.json();
//                 const login_ID = responseData.login_ID;
//                 console.log('POST request successful.', login_ID);
//             } else {
//                 console.warn('Error sending items to the server. Status:', response.status);
//                 const massage = await response.text()
//                 console.log(massage)
//             }
//         } catch (error) {
//             console.warn('Error sending items to the server:', error);
//         };
//     }
//     return (
//         <View style={styles.container}>
//             <SafeAreaView>
//                 <ScrollView>
//                     <View>
//                         <View>
//                             <Text style={styles.label}> Name</Text>
//                             <TextInput
//                                 style={styles.input} value={Name}
//                                 onChangeText={text => setName(text)}
//                             />
//                             <Text style={styles.label}>Email</Text>
//                             <TextInput
//                                 style={styles.input} value={Email}
//                                 onChangeText={text => setEmail(text)}
//                             />
//                             <Text style={styles.label}>LoginID</Text>
//                             <TextInput
//                                 style={styles.input} value={login_Name}
//                                 onChangeText={text => setlogin_Name(text)}
//                             />
//                             <Text style={styles.label}>Password</Text>
//                             <TextInput
//                                 style={styles.input} value={Password}
//                                 onChangeText={text => setPassword(text)}
//                             />
//                             <Text style={styles.label}>Branch Name</Text>
//                             <SelectList
//                                 setSelected={setSelectedBranch}
//                                 // setSelected={(element)=>console.log(element)}
//                                 data={BranchDD.map(item => ({ key: parseInt(item.branch_ID), value: item.branchName, label: item.branch_ID.toString() }))}
//                                 save="key"
//                             />
//                             <Text style={styles.label}>Phone No</Text>
//                             <TextInput
//                                 style={styles.input} value={PhoneNo}
//                                 onChangeText={text => setPhoneNo(text)}
//                             />
//                             <Text style={styles.label}>Work From</Text>
//                             <Picker
//                                 style={styles.dropdown}
//                                 selectedValue={selectedWorkFrom}
//                                 onValueChange={itemValue => setSelectedWorkFrom(itemValue)}
//                                 mode="multiple"
//                             >
//                                 <Picker.Item label="Onsite" value="onsite" />
//                                 <Picker.Item label="Remote" value="remote" />
//                             </Picker>
//                             <Text style={styles.label}>Ext No</Text>
//                             <TextInput
//                                 style={styles.input}
//                                 value={ExtNo}
//                                 onChangeText={text => setExtNo(text)}
//                             />
//                             <Text style={styles.label}>cell No</Text>
//                             <TextInput
//                                 style={styles.input}
//                                 value={CallNo}
//                                 onChangeText={text => setCallNo(text)}
//                             />
//                             <Text style={styles.label}>GtalkID</Text>
//                             <TextInput
//                                 style={styles.input}
//                                 value={GtalkID}
//                                 onChangeText={text => setGtalkID(text)}
//                             />
//                             <Text style={styles.label}>YahooID</Text>
//                             <TextInput
//                                 style={styles.input}
//                                 value={YahooID}
//                                 onChangeText={text => setYahooId(text)}
//                             />
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 11, }}>
//                                 <View style={styles.checkboxContainer}>
//                                     <Text style={styles.label}>Status   </Text>
//                                     <CheckBox
//                                         value={isStatus}
//                                         onValueChange={setStatus}
//                                         style={styles.checkbox}
//                                     />
//                                 </View>
//                                 <View style={styles.checkboxContainer}>
//                                     <Text style={styles.label}>Temp Inactive  </Text>
//                                     <CheckBox
//                                         value={isTempActive}
//                                         onValueChange={setTempActive}
//                                         style={styles.checkbox}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={{ margin: 21 }}>
//                             <Text style={styles.label}> Assign Roles</Text>
//                             <MultipleSelectList
//                                 setSelected={(val) => setSelectedRoles(val)}
//                                 data={Roles.map(item => ({ key: item.role_ID.toString(), value: item.role_Name }))}
//                                 save="key"
//                             />
//                             <Text style={styles.label}> Assign Company</Text>
//                             <MultipleSelectList
//                                 setSelected={setSelecteds}
//                                 data={CompanyDD.map(item => ({ key: item.company_ID.toString(), value: item.company_Name }))}
//                                 save="key"
//                             />
//                             <Text style={styles.label}> Assign Branch</Text>
//                             <MultipleSelectList
//                                 setSelected={setSelectedBranchDD}
//                                 data={BranchDD.map(item => ({ key: item.branch_ID.toString(), value: item.branchName }))}
//                                 save="key"
//                             />
//                         </View>
//                         <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
//                             <Text style={styles.buttonText}>Submit</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
//         </View>
//     );

// };

// const notification = () => {
//     return (
//         <View>
//             <Text style={{ color: 'green', fontFamily: FontFamily.bold, fontSize: FontSize.xl }}> From Submit successfully </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         justifyContent: 'center',
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     input: {
//         width: '95%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         elevation: 1,
//         marginBottom: 16,
//         paddingHorizontal: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     dropdown: {
//         width: '100%',
//         height: 40,
//         marginBottom: 16,
//     },
//     button: {
//         backgroundColor: 'blue',
//         padding: 10,
//         borderRadius: 8,
//         marginTop: 7,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     checkboxContainer: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     checkbox: {
//         alignSelf: 'center',
//     },
// });

// export default AddUser;







