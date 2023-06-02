/*
this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-reference variable)이다.
this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
this는 자바스크립트 엔진에 의해 암묵적으로 생성된다.
this는 코드 어디서든 참조할 수 있다
*/

// 콜라 리스트 보여주는 js파일
class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.section1 .cola-list');
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

/* fetch는 HTTP 요청 전송 기능을 제공하는 Web API다. 
데이터를 받아오기 위해 습관처럼 쓰는 fetch */

  async loadData() {
    try {
      const response = await fetch('./items.json');

      if (response.ok) {
        // 서버의 응답 코드가 200 ~ 299 일 경우
        return response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*
  DocumentFragment는 다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다.
  가상의 노드 객체로서, 메모리상에서만 존재 
   */
  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
          <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
              <img class="cola-img" src="./img/${el.img}" alt="">
              <span class="cola-name">${el.name}</span>
              <strong class="cola-price">${el.cost}원</strong>
          </button>
          `;

      item.innerHTML = itemTemplate;
    
      // append: 컨텐츠를 선택된 요소 내부의 맨 마지막에 삽입
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;
