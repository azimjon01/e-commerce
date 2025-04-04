import styled from "@emotion/styled";

export const BigContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const TopBar = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  gap: 30,
  padding: "15px 0",
});

export const Logo = styled.img({
  width: 76,
  height: 22,
});

export const SearchBar = styled.div({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5F5F5",
  padding: "7px",
  borderRadius: 8,
  width: "30%",
  "& input": {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    padding: "5px",
    width: "100%",
  },
  "& svg": {
    color: "#666",
    cursor: "pointer",
  },
});

export const SearchIcon = styled.img({
  width: 20,
  height: 20,
});

export const SearchInput = styled.input({
  color: "#656565",
});

export const NavIcons = styled.div({
  display: "flex",
  gap: "30px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#2E2E2E",
});

export const NavItem = styled.ul({
  cursor: "pointer",
  transition: "color 0.3s ease",
  color: "#2E2E2E",
  "&:hover": {
    color: "#007bff",
  },
  ":active": {
    color: "#fff",
    fontWeight: "bold",
  },
});

export const UserActions = styled.div({
  display: "flex",
  gap: "15px",
  fontSize: "18px",
  cursor: "pointer",
  "& svg": {
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
});

export const HeaderIcon = styled.img({
  width: 20,
  height: 20,
});

// Header bottom

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
