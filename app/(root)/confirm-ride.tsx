import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RIdeLayout from "@/components/RIdeLayout";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { View, Text, FlatList } from "react-native";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RIdeLayout title="Choose a Driver" snapPoint={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver}
            setSelected={() => setSelectedDriver(Number(item.id)!)}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RIdeLayout>
  );
};

export default ConfirmRide;
