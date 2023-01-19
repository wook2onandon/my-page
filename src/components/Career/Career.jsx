import React from 'react';
import Title from '../Title/Title';
import styles from './Career.module.css';

export default function Career({ elementRef }) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.wrap}>
        <Title font="CAREER" lineColor="#000" color="#000" />
        <div className={styles.itemWrap}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrap}>
              <img
                className={styles.logo}
                src="/images/shoppingonair.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.careerContainer}>
            <div className={styles.careerTitle}>(주) 쇼핑온에어</div>
            <div className={styles.careerPeriod}>2021.05 - 2022.07</div>
            <div className={styles.careerDescription}>
              다양한 라이브커머스를 하나의 플랫폼에서 시청가능하며
              <b>
                {' '}
                쇼호스트들과 라이브커머스에 참여하고 싶은 기업들을 매칭,
                라이브커머스 제작대행까지하는 플랫폼입니다.{' '}
              </b>
              또한 온닥,리큐젠 등 다양한 쇼핑몰 채널도 운영하는 회사입니다.
              <br />
              <br />
              기본적으로 <b>React기반의 Frontend부분의 개발을 총괄 담당</b>
              하였습니다. 동료 개발자들과 작업에 대한 코드 리뷰나 신입 개발자의
              사수 역할과 같은 기타 업무까지 함께 담당하였습니다.
            </div>
            <ul className={styles.careerListWrap}>
              <h4 className={styles.careerListTitle}>
                ▎프론트의 전반적인 관리 및 각종 기능 추가/개선
              </h4>
              <h5 className={styles.careerListPeriod}>
                2021년 8월 - 2022년 3월{' '}
              </h5>
              <li>Ruby기반의 레거시코드로 만들어진 앱 React기반으로 재개발</li>
              <li>전체적인 디자인 수정과 앱내 신규 기능 추가</li>
              <li>구글 analytics 설치 및 관리</li>
              <li>구글 tag manager 설치 및 관리</li>
              <li>네이버 gfa 설치 및 관리</li>
              <li>
                라이브 일정별, 커머스 회사별, 제품별로 볼수있는 캘린더 기능 기획
                및 개발
              </li>
              <li>
                제작사와 쇼호스트의 매칭 시스템 개발(수동 매칭 및 ai매칭 서비스)
              </li>
              <li>매칭시 발생하는 수수료 결제기능(PG사) 추가</li>
              <li>앱내 채팅기능 추가</li>
              <li>라이브 커머스 검색기능 추가</li>
              <li>
                라이브방송의 제품을 최저가로 검색해주는 기능 개발(네이버
                스마트스토어 기준)
              </li>
              <li>자주 쓰이는 코드 리팩토링 및 컴포넌트화</li>
              <h4 className={styles.careerListTitle}>
                ▎쇼핑몰 구축(프론트엔드 전반) 및 관리
              </h4>
              <h5 className={styles.careerListPeriod}>
                2022년 4월 - 2022년 7월{' '}
              </h5>
              <li>온닥 사이트 구축(원데이넷)</li>
              <li>리큐젠 사이트 구축(카페24)</li>
              <h4 className={styles.careerListTitle}>
                ▎개발 업무 외 기타 업무 담당
              </h4>
              <h5 className={styles.careerListPeriod}>2021.6 - 2022.7</h5>
              <li>코드 리뷰</li>
              <li>신입 개발자 사수 담당 (업무 교육/할당)</li>
              <li>개발 관련 유용한 지식 발표 및 공유</li>
              <li>개발팀 업무 관련 문서정리 및 일정정리</li>
              <li>프론트엔드 인수인계 문서 작성</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
