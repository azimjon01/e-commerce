import styled from "@emotion/styled";

export const BrowseContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "70px 100px",
  gap: 20,
});

export const BrowseTop = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BrowseTitle = styled.h1((props) => ({
  color: props.theme.colors.text,
  fontSize: 20,
  fontWeight: 500,
}));

export const IconContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

interface BrowseTopIconProps {
  rotate?: number;
}

export const BrowseTopIcon = styled.img<BrowseTopIconProps>(
  ({ rotate = 0 }) => ({
    width: 25,
    height: 25,
    transform: `rotate(${rotate}deg)`,
    cursor: "pointer",
  }),
);

export const BrowseIcons = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BrowseIconContainer = styled.div((props) => ({
  width: "100px",
  height: "90px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: 8,
  background: props.theme.colors.text,
  color: props.theme.colors.background,
  transition: "transform 0.3 ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
    backgroundColor: props.theme.colors.secondary,
    color: props.theme.colors.text,
  },
}));

export const BrowseIcon = styled.img({
  width: 40,
  height: 40,
  cursor: "pointer",
});

export const BrowseIconTitle = styled.p({
  fontSize: 13,
  cursor: "pointer",
});
