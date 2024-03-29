import styled from '@emotion/styled';
import { Colors } from '@/styles/globalStyles';

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('/images/main-background.svg');
  background-size: cover;
  background-repeat: no-repeat;

  & > .top-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 50px 50px;

    & > p {
      color: ${Colors.White};
      letter-spacing: 5px;
    }

    & > .icons-container {
      display: flex;
      gap: 16px;
      align-items: center;

      & > img {
        cursor: pointer;
      }
    }
  }

  & > .center-container {
    & > .circle {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      & > img {
        min-width: 400px;
        width: 40vw;
      }
    }

    & > .left-big-star {
      position: absolute;
      top: 42rem;
      left: 10rem;
    }

    & > .left-small-star {
      position: absolute;
      left: 14rem;
      top: 48rem;
    }

    & > .name-wrapper {
      width: fit-content;
      display: flex;
      gap: 13rem;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      & > .name {
        font-size: 11rem;
        color: ${Colors.White};
        -webkit-text-stroke: 1px ${Colors.Black};
      }
    }

    & > .right-star {
      position: absolute;
      top: 19rem;
      right: 13rem;
    }
  }

  & > .bottom-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 0 50px;
    color: ${Colors.White};

    & .rotating {
      position: absolute;
      bottom: -314px;
      animation-duration: 32s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      & text {
        font-size: 10px;
      }
    }

    & .rotate-portfolio {
      left: -148px;
      animation-name: rotate-portfolio;
    }
    & .rotate-posts {
      right: -148px;
      animation-name: rotate-posts;
    }

    & .text {
      letter-spacing: 17px;
      fill: ${Colors.White};
      fill-opacity: 0.2;
    }

    @keyframes rotate-portfolio {
      to {
        transform: rotate(1turn);
      }
    }

    @keyframes rotate-posts {
      to {
        transform: rotate(-1turn);
      }
    }

    & .menu {
      position: relative;
      letter-spacing: 5px;
      margin-bottom: 50px;
      cursor: pointer;

      & > .header {
        font-size: 24px;
        margin-bottom: 28px;
      }
    }

    & .posts {
      text-align: right;
    }

    & > .barcode-container {
      width: fit-content;
      display: flex;
      gap: 2px;
      align-items: center;
      flex-direction: column;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 40px;

      & > span {
        height: 14px;
        font-size: 10px;
        letter-spacing: 5px;
        margin-left: 5px;
      }
    }
  }
`;

export default MainContainer;
