
const input = "hello my name is sparta";

// js 문자열 아스키코드 변환
// "문자열".charCodeAt( 문자열 자릿수 );

// js 아스키코드를 문자열로 변환 
// String.fromCharCode( 아스키코드 번호 );

function find_max_occurred_alphabet(string) {
  // js 알파벳 정규식
  // const alphabet_check = /^[a-z|A-Z]+$/;
  // let alphabet_arr = new Array(26).fill(0);

  // for (let i = 0; i < string.length; i++) {
  //   if (alphabet_check.test(string.charAt(i))) {
  //     alphabet_arr[string.charCodeAt(i) - 97]++;
  //   }
  // }

  const aASCIICode = 'a'.charCodeAt(0);

  const alphabet_arr = string.split('').reduce( (acc, cur) => {
    const cur_ASCII = cur.charCodeAt(0);

    if ( cur_ASCII >= 97 && cur_ASCII <= 122 ) {
      const index = cur_ASCII - 97;

      acc[index] += 1;
    }

    return acc;
  }, new Array(26).fill(0));

  let max = 0;
  let max_index = null;

  for (let i = 0; i < alphabet_arr.length; i++) {
    if ( alphabet_arr[i] > max ) {
      max = alphabet_arr[i];
      max_index = i;
    }
  }

  return String.fromCharCode(max_index + 97);
}

const result = find_max_occurred_alphabet(input);

console.log(result);