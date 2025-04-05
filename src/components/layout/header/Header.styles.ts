import styled from "@emotion/styled";

export const BigContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: props.theme.colors.background,
  color: props.theme.colors.text,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  borderBottom: `1px solid ${props.theme.mode === "light" ? "#111111" : "#ffffff"}`,
}));

export const TopBar = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  gap: 30,
  padding: "15px 0",
});

export const Logo = styled.img({
  cursor: "pointer",
  width: 76,
  height: 22,
});

export const SearchBar = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: props.theme.colors.border,
  padding: "7px",
  borderRadius: 8,
  width: "30%",
  "& input": {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    padding: "5px",
    width: "100%",
    color: props.theme.colors.text,
  },
  "& svg": {
    color: "#666",
    cursor: "pointer",
  },
}));

export const SearchIcon = styled.img({
  width: 20,
  height: 20,
});

export const SearchInput = styled.input((props) => ({
  color: props.theme.mode === "light" ? "#111111" : "#ffffff",
  backgroundColor: props.theme.mode === "light" ? "#ffffff" : "#333333",
  border: `1px solid ${props.theme.mode === "light" ? "#ccc" : "#444"}`,

  "::placeholder": {
    color: props.theme.mode === "light" ? "#000" : "#fff",
  },
}));

export const NavIcons = styled.div((props) => ({
  display: "flex",
  gap: "30px",
  fontSize: "14px",
  fontWeight: 500,
  color: props.theme.colors.text,
}));

export const NavItem = styled.ul((props) => ({
  cursor: "pointer",
  transition: "color 0.3s ease",
  color: props.theme.colors.text,
  "&:hover": {
    color: props.theme.colors.primary,
  },
  ":active": {
    color: "#fff",
    fontWeight: "bold",
  },
}));

export const UserActions = styled.div((props) => ({
  display: "flex",
  gap: "15px",
  fontSize: "18px",
  cursor: "pointer",
  "& svg": {
    transition: "color 0.3s ease",
    color: props.theme.colors.text,
    "&:hover": {
      color: props.theme.colors.primary,
    },
  },
}));

export const HeaderIcon = styled.img({
  width: 20,
  height: 20,
});

export const BottomBar = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  width: "100%",
  padding: "10px 0",
  backgroundColor: "#2E2E2E",
  color: "#FFFFFF",
});

export const Category = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "color 0.3s ease",
  padding: "0 40px 0 15px",
  position: "relative",
  "& svg": {
    fontSize: "18px",
  },
  "&:hover": {
    color: "#007bff",
  },
  "&:not(:last-child)": {
    borderRight: "1px solid rgba(255,255,255,0.2)",
  },
});

export const BottomIcon = styled.img({
  width: 20,
  height: 20,
});

export const DarkLightButton = styled.button((props) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: props.theme.colors.text,
  transition: "color 0.3s ease",
  "&:hover": {
    color: props.theme.colors.primary,
  },
}));
