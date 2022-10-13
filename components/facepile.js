import { View } from "react-native";
import FacePile from "react-native-face-pile";
const FacePileComponent = () => {
  const FACES = [
    {
      id: 0,
      imageUrl:
        "https://i1.sndcdn.com/artworks-1kK2LeUMqtUH5SIx-IIYPDA-t500x500.jpg",
    },
    {
      id: 1,
      imageUrl:
        "https://i1.sndcdn.com/artworks-1kK2LeUMqtUH5SIx-IIYPDA-t500x500.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://i1.sndcdn.com/artworks-1kK2LeUMqtUH5SIx-IIYPDA-t500x500.jpg",
    },
  ];
  return (
    <FacePile
      imageStyle={{ height: 30, width: 30, marginRight: 8 }}
      numFaces={3}
      faces={FACES}
    />
  );
};
export default FacePileComponent;
