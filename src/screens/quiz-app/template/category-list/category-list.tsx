import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Animated, { BounceIn, ZoomIn, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Rewards from '../../molecules/rewards/rewards';
import { useNavigation } from '@react-navigation/native';

const CategoryList = () => {
    const scrollY = useSharedValue(0);
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    const AniImage = Animated.createAnimatedComponent(Image)
    const navigation:any = useNavigation()

    const animatedHeaderStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 100], [1, 0]); // Example interpolation
        return {
            opacity: opacity,
        };
    });


    const listStyle = useAnimatedStyle(() => {
        const translateX = interpolate(scrollY.value, [0, 100], [0, -55]); // Example interpolation
        return {
            transform: [{ translateY: translateX }],
        };
    });

    const Data = [
        { id: 3, name: "Maths", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/maths-class-5748771-4817936.png" },
        { id: 2, name: "Chemistry", count: 10, image_url: "https://static.vecteezy.com/system/resources/previews/009/827/726/original/back-to-school-physics-icon-3d-illustration-png.png" },
        { id: 4, name: "Physics", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
        { id: 5, name: "Biological", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/dna-4697845-3916896.png?f=webp" },
        { id: 1, name: "Sports", count: 10, image_url: "https://static.vecteezy.com/system/resources/thumbnails/010/881/314/small_2x/cute-basketball-sport-3d-icon-illustration-png.png" },
        { id: 6, name: "Geography", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/geographical-location-7018555-5728106.png?f=webp" }
    ]

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("DetailsScreen",{item:item})}>
                <Animated.View style={styles.box} sharedTransitionTag="sharedTag">
                    <AniImage source={{ uri: item?.image_url }} style={styles.icon} entering={BounceIn.delay(100 * index).duration(900)} />
                    <View style={styles.description}>
                        <Text style={styles.name}>{item?.name}</Text>
                        <Text style={styles.count}>{item?.count} Questions</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>

        )
    }
    return (
        <View style={styles.container}>
            {/* <Animated.View style={[{ height: 100, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }, animatedHeaderStyle]}>
                <Text>Animated Header</Text>
            </Animated.View> */}
            <Rewards animatedHeaderStyle={animatedHeaderStyle} />
            <Animated.View style={listStyle}>
                <View style={styles.header}>
                    <Text style={styles.title}>Let's Play</Text>
                </View>
                <AnimatedFlatList
                    data={Data}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(x, i) => i.toString()}
                    style={[{ marginTop: 5 }]}
                    contentContainerStyle={{ alignItems: "center" }}
                    onScroll={(event) => {
                        scrollY.value = event.nativeEvent.contentOffset.y;
                    }}
                    ListFooterComponent={() => (
                        <View style={{ height: 400 }} />
                    )}

                />
            </Animated.View>

        </View>
    )
}

export default CategoryList