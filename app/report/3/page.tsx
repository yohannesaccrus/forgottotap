import { Raleway } from "next/font/google";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import Link from "next/link";

import { data, statusType } from "../data/3";

import '../custom.scss';

const raleway = Raleway({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["300", "400", "700"],
});

dayjs.extend(isBetween);

const Report = () => {
  return (
    <>
      <div className="container">
        <div className="content report">
          <section className="section-title">
            <h2 className={raleway.className}>
              Bi-Weekly Report #3
            </h2>
            <p>Period: <span>{dayjs().subtract(2, 'week').format('dddd, D MMMM YYYY')} - {dayjs().format('dddd, D MMMM YYYY')}</span></p>
          </section>
          <section className="section-content works">
            <h3>Main Area</h3>
            <ul>
              {data.main.map((work) => (
                <li>
                  <div className="work">
                    <div className="links">
                      <Link href={`https://jira.shopee.io/browse/SPPAY-${work.number}`}>JIRA Task</Link>
                      <Link href={`https://jira.shopee.io/browse/SPPAY-${work.numberEpic}`}>JIRA's Epic</Link>
                    </div>
                    <p className="title">{work.title}</p>
                    <div className="info">
                      <p>scope:</p>
                      <p className="value">{work.scope.join(', ')}</p>
                    </div>
                    <div className="info">
                      <p>assigne:</p>
                      <p className="value">{work.assigne}</p>
                    </div>
                    <div className="info">
                      <p>pm:</p>
                      <p className="value">{work.pm || 'none'}</p>
                    </div>
                    <div className="info">
                      <p>release plan:</p>
                      <p className="value">{work.releasePlan || 'TBA'}</p>
                    </div>
                    <div className="info">
                      <p>role(s)</p>
                      <p className="value">{work.role.join(', ')}</p>
                    </div>
                    <div className="info">
                      <p>status</p>
                      <p className="value">{statusType[work.status]}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="section-content works">
            <h3>Platform Area</h3>
            <ul>
              {data.platform.map((work) => (
                <li>
                  <div className="work">
                    <p className="title">{work.title}</p>
                    <div className="info">
                      <p>scope:</p>
                      <p className="value">{work.scope.join(', ')}</p>
                    </div>
                    <div className="info">
                      <p>assigne:</p>
                      <p className="value">{work.assigne}</p>
                    </div>
                    <div className="info">
                      <p>pm:</p>
                      <p className="value">{work.pm || 'none'}</p>
                    </div>
                    <div className="info">
                      <p>release plan:</p>
                      <p className="value">{work.releasePlan || 'TBA'}</p>
                    </div>
                    <div className="info">
                      <p>role(s)</p>
                      <p className="value">{work.role.join(', ')}</p>
                    </div>
                    <div className="info">
                      <p>status</p>
                      <p className="value">{statusType[work.status]}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="section-content works">
            <h3>Other Area</h3>
            <ul>
              {data.others.map((work) => (
                <li>
                  <div className="work">
                    <p className="title">{work.title}</p>
                    <div className="info">
                      <p>assigne:</p>
                      <p className="value">{work.assigne}</p>
                    </div>
                    <div className="info">
                      <p>role(s)</p>
                      <p className="value">{work.role.join(', ')}</p>
                    </div>
                    <div className="info">
                      <p>status</p>
                      <p className="value">{statusType[work.status]}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="section-content note">
            <h3>Note / Concern</h3>
            <p className={raleway.className}>
              I will put my efforts more in Real Time Monitoring since the development will start next week, also with the PMP project I need to start the TD as well.
              So far there's no concerns from me, all good, stay safe in SZ Pak Jul 🏁
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Report;
