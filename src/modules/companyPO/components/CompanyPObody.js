
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { BranchStyle } from '../../BranchStyle';

export default function CompanyPObody({ data1, data2 }) {
    
    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            {/* <Text style={BranchStyle.cell}>{item.branchName+"-"+(item.companyName.split(" ")[0])}</Text> */}
            <Text style={BranchStyle.cell}>{item.companyName}</Text>
            <Text style={BranchStyle.cell}>{item.totalPO}</Text>
            <Text style={BranchStyle.cell}>{item.totalRunningPO}</Text>
            <Text style={BranchStyle.cell}>{item.totalEndedPO}</Text>
            <Text style={BranchStyle.cell}>{item.totalFizzledPO}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Company Name</Text>
            <Text style={BranchStyle.headerText}>T.PO#</Text>
            <Text style={BranchStyle.headerText}>R.PO#</Text>
            <Text style={BranchStyle.headerText}>E.PO</Text>
            <Text style={BranchStyle.headerText}>F.PO</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalRunningPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalEndedPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalFizzledPO}</Text>
                    </View>

                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalRunningPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalEndedPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalFizzledPO}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalRunningPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalEndedPO}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalFizzledPO}</Text>
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
                    <Text style={BranchStyle.txt}> Company PO:-</Text>
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