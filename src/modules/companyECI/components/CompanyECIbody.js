
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { BranchStyle } from '../../BranchStyle';

export default function CompanyECIbody({ data1, data2 }) {

    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.cell}>{item.companyName}</Text>
            <Text style={BranchStyle.cell}>{item.totalECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalBackoutECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalConfirmedECI}</Text>
            <Text style={BranchStyle.cell}>{item.totalRescheduledECI}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Company Name</Text>
            <Text style={BranchStyle.headerText}>T.ECI#</Text>
            <Text style={BranchStyle.headerText}>Backout#</Text>
            <Text style={BranchStyle.headerText}>Confirmed</Text>
            <Text style={BranchStyle.headerText}>Rescheduled</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalRescheduledECI}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalRescheduledECI}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalBackoutECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalConfirmedECI}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalRescheduledECI}</Text>
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
                <View style={BranchStyle.txtview}>
                    <Text style={BranchStyle.txt}> Company ECI:-</Text>
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