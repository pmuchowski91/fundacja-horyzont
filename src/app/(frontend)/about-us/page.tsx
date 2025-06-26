import React from 'react'
import Page from '@/components/Page'
import AboutUs from '@/components/AboutUs/intex'

const AboutUsPage: React.FC = () => (
  <Page title="O nas">
    <div className="flex flex-col">
      <AboutUs name="Szymon Makyła" imageSrc="/szymon.png" circleBorderPercent={75}>
        <p>
          Pełni funkcję prezesa Fundacji Wspierania Rozwoju "Horyzont", gdzie odpowiada za
          organizację i realizację projektów naukowych, technicznych i artystycznych. Zarządza
          administracyjną stroną działalności fundacji, dbając o sprawny przebieg działań i rozwój
          inicjatyw.
        </p>
      </AboutUs>
      <AboutUs name="Alicja Szczudlińska" imageSrc="/alicja.png" circleBorderPercent={62}>
        <p>
          Wiceprezeska, w FWR Horyzont zajmuje się organizacją i koordynacją wydarzeń związanych ze
          sztuką, m.in. webinarów, paneli dyskusyjnych oraz (docelowo) międzynarodowych projektów
          artystycznych. Dodatkowo odpowiada za fundacyjny PR i media społecznościowe.
        </p>
      </AboutUs>
      <AboutUs name="Tomasz Muchowski" imageSrc="/tomek.png" circleBorderPercent={50}>
        <p>
          Inżynier informatyki, Sekretarz i Członek Zarządu Fundacji Wspierania Rozwoju "Horyzont".
          Łączy 8-letnie doświadczenie w administracji sieciowej oraz 4-letnie doświadczenie jako
          programista z pasją do nauczania programowania, cyberbezpieczeństwa oraz DevOps.
        </p>
      </AboutUs>
    </div>
  </Page>
)

export default AboutUsPage
