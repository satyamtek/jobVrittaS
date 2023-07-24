
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { BranchStyle } from '../../BranchStyle';

export default function CompanyMarginBody({ data1, data2 }) {
    const renderItem = ({ item }) => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.cell}>{item.companyName}</Text>
            <Text style={BranchStyle.cell}>{item.totalMargin}</Text>
            <Text style={BranchStyle.cell}>{item.totalRunningMargin}</Text>
            <Text style={BranchStyle.cell}>{item.totalEndedMargin}</Text>
            <Text style={BranchStyle.cell}>{item.totalFizzledMargin}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={BranchStyle.row}>
            <Text style={BranchStyle.headerText}>Company Name</Text>
            <Text style={BranchStyle.headerText}>T.Margin#</Text>
            <Text style={BranchStyle.headerText}>R.Mgn#</Text>
            <Text style={BranchStyle.headerText}>E.Mgn</Text>
            <Text style={BranchStyle.headerText}>F.Mgn</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalRunningMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalEndedMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.dayTotalFizzledMargin}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalRunningMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalEndedMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.monthTotalFizzledMargin}</Text>
                    </View>
                    <View style={BranchStyle.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalRunningMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalEndedMargin}</Text>
                        <Text style={BranchStyle.cell1}>{data2.quarterTotalFizzledMargin}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View >
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAViTewssmGujrzoe-H42eRmy1ExbYxRZ0mA&usqp=CAU' }}
                style={{ height: '100%' }}>
                <View style={BranchStyle.txtview}>
                    <Text style={BranchStyle.txt}> Company Margin:-</Text>
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