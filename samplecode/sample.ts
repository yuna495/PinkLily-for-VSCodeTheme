// シンプルな関数: 名前を受け取り、挨拶を返す
const greet = (name: string): string => {
  if (!name) {
    throw new Error("名前が空です！有効な名前を入力してください。");
  }
  return `こんにちは、${name}さん！`;
};

// 配列の合計を計算する関数
const calculateSum = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// メイン処理
try {
  // 名前に基づいた挨拶
  console.log(greet("太郎"));

  // 配列の合計を計算
  const numbers = [10, 20, 30, 40];
  console.log(`配列の合計: ${calculateSum(numbers)}`);

  // エラーのシミュレーション
  console.log(greet("")); // ここでエラーが発生します
} catch (error) {
  // error を型キャストしてメッセージを表示
  if (error instanceof Error) {
    console.error("エラーが発生しました:", error.message);
  } else {
    console.error("予期しないエラーが発生しました:", error);
  }
}
{
  {
    {
      {
        {

        }
      }
    }
  }
}
