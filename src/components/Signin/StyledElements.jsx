import styled from "styled-components";

export const TopImage = styled.img`
  height: 430px;
  width: 360px;
  position: absolute;
  right: 0rem;
  top: 0rem;
`;

export const DownImage = styled.img`
  height: 270px;
  width: 300px;
  position: absolute;
  right: 0rem;
  top: auto;
  left: 0rem;
  bottom: 0rem;
`;

export const KaniniLogo = styled.img`
  width: 48%;
  margin-bottom: 3rem;
`;

export const Encompass = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  @media screen and (max-width: 51rem) {
    grid-template-columns: 1fr;
  }
`;

export const QuotesImage = styled.img`
  height: 4.5rem;
  margin-bottom: 1.5rem;

`;

export const ModifiedDiv = styled.div`
  padding: 2rem 15rem 0rem 15rem;
  @media screen and (max-width: 60rem) {
    padding: 10%;
    width: 100vw;
    height: 100vh;
  }
`;

export const background = {
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage:
    "linear-gradient(134.3deg, #0088CE -45.11%, rgba(0, 138, 207, 0.2) 42.59%, rgba(189, 218, 87, 0) 90.72%)",
  minHeight: "100vh",
  maxHeight: "100vh",
  borderRadius: `0px 0px 185px 0px`,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "-120",
  overflow: "clip",
};
