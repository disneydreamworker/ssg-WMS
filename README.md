# 🎉 프로젝트 이름

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=프로젝트%20이름&fontSize=40&animation=twinkling)

## 📌 프로젝트 소개

간단한 프로젝트 설명을 여기에 작성하세요. 이 프로젝트가 어떤 문제를 해결하는지, 주요 기능은 무엇인지 설명합니다.

예시:

이 프로젝트는 **사용자 관리 시스템**을 구현하기 위한 웹 애플리케이션입니다. React를 사용하여 프론트엔드를 개발하고, Spring Boot와 MyBatis를 사용하여 백엔드를 구축했습니다.

## 🚀 기능

- 회원 가입 및 로그인
- 사용자 정보 수정
- 관리자 페이지에서 사용자 관리
- 페이징 및 검색 기능

## 🛠 기술 스택

- **프론트엔드**: React, @emotion/styled, antd
- **백엔드**: Spring Boot, MyBatis, JPA
- **데이터베이스**: MySQL
- **배포**: AWS S3, Google Cloud Storage

## 🔧 폴더 구조

```bash

프로젝트 루트/
├── backend/                    # 백엔드(Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/yourpackage/project/   # Java 소스 코드
│   │   │   │       ├── controller/           # 컨트롤러 계층
│   │   │   │       ├── service/              # 서비스 계층
│   │   │   │       ├── repository/           # MyBatis Mapper 또는 JPA Repository
│   │   │   │       ├── model/                # 도메인 모델 (DTO, Entity 등)
│   │   │   └── resources/
│   │   │       ├── application.yml           # 애플리케이션 설정 파일
│   │   │       ├── mapper/                   # MyBatis Mapper XML 파일
│   │   │       └── static/                   # 정적 파일 (CSS, JavaScript, 이미지 등)
│   │   └── test/                             # 테스트 코드
│   ├── build.gradle                          # Gradle 빌드 파일
│   └── settings.gradle                       # Gradle 설정 파일
│
├── frontend/                   # 프론트엔드(React)
│   ├── public/                 # 정적 파일
│   │   └── index.html          # 메인 HTML 파일
│   ├── src/                    # React 소스 코드
│   │   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── containers/         # 상태 관리 및 로직 처리
│   │   ├── pages/              # 주요 페이지 컴포넌트
│   │   ├── hooks/              # 커스텀 훅
│   │   ├── styles/             # 전역 스타일 (Emotion, Styled-components)
│   │   └── App.js              # 메인 앱 컴포넌트
│   ├── package.json            # 프로젝트 정보 및 의존성
│   └── webpack.config.js       # Webpack 설정 파일
│
├── .gitignore                  # Git 무시 파일
├── README.md                   # 리드미 파일
└── LICENSE                     # 라이센스 파일

```

## ✨ 리팩토링 과정

👇 블로그 보러 가기! 👇
[![Tistory Blog](https://img.shields.io/badge/Tistory-Blog-orange?style=for-the-badge)](https://your-tistory-blog-url.com/게시글-url)

