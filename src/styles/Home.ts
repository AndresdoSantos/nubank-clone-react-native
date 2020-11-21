import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
  background-color: #8b10ae;
`;

const Header = styled.View`
  max-height: ${(height * 0.9) / 8}px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 20px;
`;

const TitleWrapper = styled.View`
  display: flex;
  width: ${(width * 0.8) / 2}px;

  height: 100%;

  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;

  font-size: 25px;
  font-weight: bold;

  letter-spacing: 1.2px;
`;

const IconsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${(width * 0.6) / 2}px;
`;

const Icon = styled.View`
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 5px;
  margin-left: 5px;

  border-radius: 50;
  background-color: #993399;
`;

const MainContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Main = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: ${(height * 0.9) / 4.5}px;
  margin-bottom: 15px;
  padding: 10px 25px;
  border-radius: 5px;

  background-color: #fff;

  border: 1px solid white;
`;

const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

const CardHeaderTitle = styled.Text`
  color: #333;
  font-size: 15px;
`;

const CardHeaderIcon = styled.View`
  width: 30px;
  height: 20px;

  border: 1px solid black;
  margin-right: 30px;
`;

const CardMain = styled.View`
  display: flex;
  flex-direction: column;
`;

const CardMainTitle = styled.Text`
  font-size: 12px;
  font-weight: 100;

  margin-top: 20px;
  margin-bottom: 10px;
`;

const CardMainInvoice = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #00ffff;
`;

const CardBottom = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 5px;
`;

const CardBottomTitle = styled.Text`
  font-size: 12px;
`;

const CardBottomLimit = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #006400;
`;

export {
  Container,
  Header,
  TitleWrapper,
  Title,
  IconsWrapper,
  Icon,
  Main,
  MainContainer,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardMain,
  CardMainTitle,
  CardMainInvoice,
  CardBottom,
  CardBottomTitle,
  CardBottomLimit,
};
