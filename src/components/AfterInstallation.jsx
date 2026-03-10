import ReactIcon from "assets/icons/react.svg";
import ViteIcon from "assets/icons/vite.svg";
import LogoImage from "assets/images/logo200.png";
import { GetEnv } from "utils/index";
import { version } from "../../package.json";

const AfterInstallation = () => {
  return (
    <div className="w-full p-1.5">
      <div className="relative p-8">
        <div className="mb-4 flex flex-col justify-between sm:flex-row">
          <div className="text-h3 font-bold tracking-tight text-[#4A5568]">
            After Installation
          </div>
          <div className="text-small flex flex-col items-end gap-2.5">
            <div className="flex gap-1 rounded-full border border-white/40 bg-[#4A5568] px-4 py-0.5 shadow-sm backdrop-blur-sm">
              <img src={ViteIcon} width="16px" alt="vite-icon" />
              <img src={ReactIcon} width="16px" alt="react-icon" />
              <strong className="text-white">Template v{version}</strong>
            </div>
            <sup className="flex items-center gap-2 text-right text-sm font-bold">
              <a
                href="https://www.pantone.com/color-of-the-year/2026"
                target="_blank"
                className="flex items-center gap-1 transition-opacity hover:opacity-70"
              >
                <div className="h-2 w-2 rounded-sm border border-[#D8D6D0] bg-[#F1F0EC]" />
                Pantone Color of the Year 2026 - Cloud Dancer
              </a>
            </sup>
          </div>
        </div>
        <div className="mx-auto mb-4 w-full max-w-xs rounded-xl border border-white/40 bg-linear-to-r from-[#A0AEC0]/30 to-[#4A5568]/80 p-1.5 text-center shadow-lg backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <img src={LogoImage} alt="logo" className="w-[30vw] max-w-40" />
            <div className="w-full rounded-lg bg-white/80 p-1 backdrop-blur-sm">
              <div>This is the way -- Mandalorian</div>
              <marquee>
                <strong>Mode: </strong>
                {GetEnv("MODE")}
              </marquee>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[#D8D6D0] bg-white/50 p-4 backdrop-blur-sm">
          <strong>
            You have to edit text by name below this{" "}
            <span className="text-[#A0AEC0]">
              (Spoiled Alert!, use &quot;Find All and Replace&quot;)
            </span>
          </strong>
          <ul className="list-[upper-roman] pl-8">
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_PROJECT_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_GROUP_NAME</li>
            <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
          </ul>
        </div>
        <div className="mt-4 text-sm leading-tight text-[#A0AEC0]">
          Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like
          &quot;sub.host.com:9000&quot; or &quot;172.1.2.3:9000&quot;
        </div>
        <sup className="opacity-10">
          จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
        </sup>
      </div>
    </div>
  );
};

export default AfterInstallation;
