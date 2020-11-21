import React from 'react';

import * as S from '../../styles/Home';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>Olá, Andres</S.Title>
        </S.TitleWrapper>

        <S.IconsWrapper>
          <S.Icon />
          <S.Icon />
        </S.IconsWrapper>
      </S.Header>

      <S.Main>
        <S.MainContainer>
          <S.Card>
            <S.CardHeader>
              <S.CardHeaderIcon />
              <S.CardHeaderTitle>Cartão de Crédito</S.CardHeaderTitle>
            </S.CardHeader>
            <S.CardMain>
              <S.CardMainTitle>Fatura atual</S.CardMainTitle>
              <S.CardMainInvoice>R$ 0,00</S.CardMainInvoice>
            </S.CardMain>
            <S.CardBottom>
              <S.CardBottomTitle>Limite disponível</S.CardBottomTitle>
              <S.CardBottomLimit> R$ 7.000</S.CardBottomLimit>
            </S.CardBottom>
          </S.Card>
          <S.Card />
          <S.Card />
          <S.Card />
          <S.Card />
          <S.Card />
        </S.MainContainer>
      </S.Main>
    </S.Container>
  );
};

export default Home;
