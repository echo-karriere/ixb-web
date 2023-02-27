import FourOhFour from "../components/common/FourOhFour";
import { HeadSEO } from "../components/common/functions/HeadSEO";
import { InfoRibbon } from "../components/common/functions/infoRibbon";

export default function Custom404() {
  return (
    <>
      <HeadSEO
        title="404 - Siden finnes ikke | ITxBergen"
        description="Vi klarer ikke å finne siden du leter etter..."
      />

      <main>
      
        <InfoRibbon text='Kommer du fra en søkemotor? Vi har fått nye nettsider, så det kan ta litt tid før våre nye sider har litt indeksert. Benytt menyen for å finne det du leter etter i mellomtiden. Ønsker dere å melde dere på karrieredagen som en bedrift? Dere finner påmeldingslenken uner "For bedrifter" i menyen over' />
        <FourOhFour />
      </main>
    </>
  );
}
