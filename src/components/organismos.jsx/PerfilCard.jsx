import styled from 'styled-components';
import { IconSocial } from "../../../../Components/Molecules/Icons-Social";
import { DetailsPerson } from "../molecules/DetailsPerson";
import { InteresPerson } from "../molecules/InteresPerson";
import { BannerProfile } from "../molecules/BannerProfile";

const PerfilContainer = styled.div`
    width: 100%;
    height: fit-content;
    background: #F3F3F3;

    .informacion-perfil {
        display: flex;
        width: calc(100% - 2vw);
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1.2vw;
        margin-left: 1vw;
    }
`;

export function PerfilCard() {
    return (
        <>
            <PerfilContainer>
                <BannerProfile />
                <div className="informacion-perfil">
                    <DetailsPerson />
                    <InteresPerson />
                    <IconSocial primary={"true"} sizeIcon={"2vw"} />
                </div>
            </PerfilContainer>
        </>
    )
}
