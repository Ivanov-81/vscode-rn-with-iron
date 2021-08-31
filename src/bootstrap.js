import * as Font from "expo-font";
import { OpenBold } from "../assets/fonts/OpenSans-Bold.ttf";
import { OpenRegular } from "../assets/fonts/OpenSans-Regular.ttf";

export async function bootstrap() {
  await Font.loadAsync({
    OpenBold,
    OpenRegular
  });
}
