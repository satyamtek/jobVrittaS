import { View, Text, FlatList,ImageBackground, } from 'react-native';
import { BranchStyle } from '../../BranchStyle';

export default function SubmissionBody({data1, data2}) {

    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.cell}>{item.branchName + "-" + (item.companyName.split(" ")[0])}</Text>
            <Text style={BranchStyle.cell}>{item.totalSubmission}</Text>
            <Text style={BranchStyle.cell}>{item.totalSalesRejected}</Text>
            <Text style={BranchStyle.cell}>{item.totalPVRejected}</Text>
            <Text style={BranchStyle.cell}>{item.totalEndClientSubmission}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Branch Name</Text>
            <Text style={BranchStyle.headerText}>T.SUB#</Text>
            <Text style={BranchStyle.headerText}>T.RejbySM#</Text>
            <Text style={BranchStyle.headerText}>T.RejByPV</Text>
            <Text style={BranchStyle.headerText}>T.ECS</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalEndClientSub}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Week Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalEndClientSub}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalSubmission}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalSalesRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalPVRejected}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalEndClientSub}</Text>
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
                <View style={{ padding: 5, flexDirection: 'row', backgroundColor: ['#288691', '#9485878'] }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, color: "#39004d", }}> Branch Submission:-</Text>
                </View>
                <View style={BranchStyle.container}>
                    <View style={BranchStyle.header}>
                        <FlatList
                            data={data1}
                            // keyExtractor={item => item.branchName}
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