import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BranchStyle } from '../../BranchStyle';

export default function ECIbody({ data1, data2, net }) {
// console.log("net console",net)
    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.cell}>{item.branchName + "-" + (item.companyName.split(" ")[0])}</Text>
            <Text style={BranchStyle.cell}>{item.totalECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalBackoutECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalConfirmedECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalRescheduledECI}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Branch Name</Text>
            <Text style={BranchStyle.headerText}>ECI#</Text>
            <Text style={BranchStyle.headerText}>Backout#</Text>
            <Text style={BranchStyle.headerText}>Confirmed</Text>
            <Text style={BranchStyle.headerText}>Rescheduled</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalRescheduledECI}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Week Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.weekTotalRescheduledECI}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalRescheduledECI}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <SafeAreaView >
            <ImageBackground
                source={{ uri: 'https://cdn.wallpapersafari.com/24/74/wl1eVE.jpg' }}
                style={{ height: '100%' }}>
                <View style={BranchStyle.container}>
                    <View style={BranchStyle.header}>
                        {/* <Text>{net}</Text> */}
                        <FlatList
                            data={data1}
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ListFooterComponent={renderFooter}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
}