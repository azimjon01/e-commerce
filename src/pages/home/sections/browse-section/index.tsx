import ThemedIcon from "../../../../components/theme/ThemedIcon";
import {
  BrowseContainer,
  BrowseIcon,
  BrowseIconContainer,
  BrowseIcons,
  BrowseIconTitle,
  BrowseTitle,
  BrowseTop,
  BrowseTopIcon,
  IconContainer,
} from "./styles";

const BrowseSection = () => {
  return (
    <>
      <BrowseContainer>
        <BrowseTop>
          <BrowseTitle>Browse By Category</BrowseTitle>
          <IconContainer>
            <ThemedIcon
              light={
                <BrowseTopIcon src="/assets/images/home/browse-section/left-icon-black.svg" />
              }
              dark={
                <BrowseTopIcon src="/assets/images/home/browse-section/left-icon-white.svg" />
              }
            />
            <ThemedIcon
              light={
                <BrowseTopIcon
                  rotate={180}
                  src="/assets/images/home/browse-section/left-icon-black.svg"
                />
              }
              dark={
                <BrowseTopIcon
                  rotate={180}
                  src="/assets/images/home/browse-section/left-icon-white.svg"
                />
              }
            />
          </IconContainer>
        </BrowseTop>
        <BrowseIcons>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/phone-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/phone-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/watch-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/watch-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/camera-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/camera-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/headphone-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/headphone-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/computer-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/computer-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
          <BrowseIconContainer>
            <ThemedIcon
              light={
                <BrowseIcon src="/assets/images/home/browse-section/gaming-icon-white.svg" />
              }
              dark={
                <BrowseIcon src="/assets/images/home/browse-section/gaming-icon-black.svg" />
              }
            />
            <BrowseIconTitle>Smart Watches</BrowseIconTitle>
          </BrowseIconContainer>
        </BrowseIcons>
      </BrowseContainer>
    </>
  );
};

export default BrowseSection;
