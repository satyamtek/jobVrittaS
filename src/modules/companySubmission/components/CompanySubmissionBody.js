import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { BranchStyle } from '../../BranchStyle';

export default function CompanySubmissionBody({ data1, data2 }) {
    
    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            {/* <Text style={BranchStyle.cell}>{item.branchName+"-"+(item.companyName.split(" ")[0])}</Text> */}
            <Text style={BranchStyle.cell}>{item.companyName}</Text>
            <Text style={BranchStyle.cell}>{item.totalSubmission}</Text>
            <Text style={BranchStyle.cell}>{item.totalSalesRejected}</Text>
            <Text style={BranchStyle.cell}>{item.totalPVRejected}</Text>
            <Text style={BranchStyle.cell}>{item.totalEndClientSubmission}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Company Name</Text>
            <Text style={BranchStyle.headerText}>Sub#</Text>
            <Text style={BranchStyle.headerText}>SalesRej#</Text>
            <Text style={BranchStyle.headerText}>PV REj</Text>
            <Text style={BranchStyle.headerText}>ECS</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalEndClientSub}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalEndClientSub}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalEndClientSub}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View >
            <ImageBackground
                source={{ uri: 'https://cdn.wallpapersafari.com/24/74/wl1eVE.jpg' }}
                style={{ height: '100%' }}>
                <View style={BranchStyle.txtview} >
                    <Text style={BranchStyle.txt}> Company Submission:-</Text>
                </View>
                <View style={BranchStyle.container}>
                    <View style={BranchStyle.header}>
                        <FlatList
                            data={data1}
                            // keyExtractor={item => item.companyName}
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ListFooterComponent={renderFooter}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
}