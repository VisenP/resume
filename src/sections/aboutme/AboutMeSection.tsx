import { FC, useMemo } from "react";

import { SectionBox } from "../../elements/SectionBox.tsx";

export const AboutMeSection: FC = () => {
    const age = useMemo(() => {
        const time = Date.now() - new Date("2005-4-9").getTime();

        let days = Math.floor(time / 1000 / 3600 / 24);
        let rem = 2005 % 4;
        let years = 0;

        const originalDays = days;

        for (let index = 0; index < originalDays / 365 + 1; ++index) {
            const daysInYear = rem === 0 ? 366 : 365;

            if (days < daysInYear) break;

            days -= daysInYear;
            years++;
            rem++;
            rem %= 4;
        }

        return years;
    }, []);

    return (
        <SectionBox>
            <div className={"font-bold text-lg p-3"}>
                I am an {age}-year-old full-stack developer from Croatia,
                currently in my first year of college. <br />I am always working
                on personal and professional projects, learning new
                technologies, and improving my skills and I am always looking
                forward to new opportunities. Apart from software development I
                enjoy playing chess and competitive programming.
            </div>
        </SectionBox>
    );
};
