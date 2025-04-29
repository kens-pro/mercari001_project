import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Download, Send, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MercariManual() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">メルカリ出品マニュアル</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#intro" className="text-sm font-medium hover:text-rose-500 transition-colors">
              はじめに
            </Link>
            <Link href="#steps" className="text-sm font-medium hover:text-rose-500 transition-colors">
              出品ステップ
            </Link>
            <Link href="#tips" className="text-sm font-medium hover:text-rose-500 transition-colors">
              役立つヒント
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-rose-500 transition-colors">
              よくある質問
            </Link>
          </nav>
          <a href="/mercari_manual.pdf" download>
          <Button className="bg-rose-500 hover:bg-rose-600">
            無料ダウンロード
            <Download className="ml-2 h-4 w-4" />
          </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  初心者でも安心！
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  メルカリ出品マニュアル
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  50代も小学生もわかる！誰でも簡単に始められるメルカリ出品の手順
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    今すぐ始める
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <a href="/mercari_manual.pdf" download>
                  <Button size="lg" variant="outline">
                    マニュアルをダウンロード
                  </Button>
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>完全無料</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>わかりやすい解説</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>ステップ形式</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
              <img
    src="/ChatGPTImage429001.png"
    alt="メルカリ出品マニュアル"
    width="400"
    height="400"
  />
              </div>
            </div>
          </div>
        </section>

        {/* イントロダクション */}
        <section id="intro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">メルカリとは？</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  スマートフォンやパソコンを通じて、誰もが手軽に不用品などを出品したり、他の人が出品した商品を購入したりできるオンラインサービスです。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-12">
              {[
                {
                  title: "簡単操作",
                  description:
                    "スマートフォンがあれば、誰でも簡単に始められます。まるで、あなたのスマホの中に現れる大きなフリーマーケットのようです。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
                {
                  title: "安心取引",
                  description:
                    "メルカリは、購入者と出品者の間に入って取引をサポート。お金のやり取りも安心・安全に行えます。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
                {
                  title: "全国対応",
                  description: "日本全国どこからでも出品・購入が可能。自宅にいながら全国のお客様と取引ができます。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mx-auto">
                      <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={24} height={24} />
                    </div>
                    <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 出品ステップ */}
        <section id="steps" className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  メルカリ出品の7つのステップ
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  初めての方でも安心して出品できるよう、準備から発送までを分かりやすく解説します。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 pt-12">
              {[
                {
                  number: "1",
                  title: "出品準備をしよう！",
                  description: "アカウント登録とプロフィール設定で、信頼される出品者になりましょう。",
                  details: [
                    "メルカリアプリをダウンロードして会員登録",
                    "ニックネームの設定と電話番号認証",
                    "プロフィールを充実させて信頼度アップ",
                  ],
                },
                {
                  number: "2",
                  title: "売れる写真を撮るコツ",
                  description: "明るく、分かりやすい写真で商品の魅力を伝えましょう。",
                  details: [
                    "明るい場所で撮影して商品の状態を正確に伝える",
                    "様々な角度から撮影して詳細を見せる",
                    "シンプルな背景で商品を際立たせる",
                  ],
                },
                {
                  number: "3",
                  title: "分かりやすい説明文を書こう",
                  description: "商品の特徴や状態を詳しく伝える説明文で購入意欲を高めましょう。",
                  details: [
                    "具体的な商品名と詳細な説明",
                    "購入時期や使用頻度などの情報を記載",
                    "検索されやすいキーワードを含める",
                  ],
                },
                {
                  number: "4",
                  title: "値段を決めるヒント",
                  description: "適切な価格設定で、スムーズに売れる確率を上げましょう。",
                  details: ["同じ商品の相場を調べる", "売れやすい価格設定のコツ", "送料を考慮した価格設定"],
                },
                {
                  number: "5",
                  title: "売れたらどうする？",
                  description: "商品が売れたら、丁寧な対応で良い評価を目指しましょう。",
                  details: ["購入者へのお礼メッセージ", "発送予定日の連絡", "丁寧な梱包の準備"],
                },
                {
                  number: "6",
                  title: "商品を発送しよう！",
                  description: "メルカリの便利な配送サービスを活用して、簡単に発送しましょう。",
                  details: [
                    "らくらくメルカリ便の使い方",
                    "ゆうゆうメルカリ便の使い方",
                    "コンビニや郵便局での発送手続き",
                  ],
                },
                {
                  number: "7",
                  title: "メルカリを楽しむために",
                  description: "安全に取引を続けるための注意点と困ったときの対処法。",
                  details: ["禁止されている商品の確認", "評価システムの活用", "トラブル時の対応方法"],
                },
              ].map((step, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-rose-500 p-6 text-white md:w-1/4">
                      <span className="text-4xl font-bold">STEP {step.number}</span>
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <a href="/mercari_manual.pdf" download>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                詳しいマニュアルを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></a>
            </div>
          </div>
        </section>

        {/* 役立つヒント */}
        <section id="tips" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  メルカリで成功するための役立つヒント
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  初心者の方が陥りがちな失敗を避け、スムーズに取引を進めるためのアドバイスです。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-12">
              {[
                {
                  title: "梱包材は100円ショップで十分",
                  description:
                    "高価な梱包材を購入する必要はありません。100円ショップで手に入る材料で十分丁寧な梱包ができます。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
                {
                  title: "季節に合わせた出品を",
                  description:
                    "季節に合った商品は売れやすくなります。冬物は秋から、夏物は春から出品すると良いでしょう。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
                {
                  title: "コメントには素早く返信",
                  description:
                    "購入検討者からのコメントには素早く丁寧に返信しましょう。対応の良さが購入の決め手になることも。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
                {
                  title: "定期的に商品を更新",
                  description: "出品した商品は定期的に「編集して更新」すると、検索結果の上位に表示されやすくなります。",
                  icon: "/placeholder.svg?height=48&width=48",
                },
              ].map((tip, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Image src={tip.icon || "/placeholder.svg"} alt={tip.title} width={24} height={24} />
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">よくある質問</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  メルカリ初心者の方がよく抱く疑問にお答えします。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 pt-12">
              {[
                {
                  question: "メルカリを始めるのにお金はかかりますか？",
                  answer:
                    "メルカリのアプリダウンロードや会員登録は無料です。商品が売れた際に手数料（販売価格の10%）がかかります。",
                },
                {
                  question: "どんな商品でも出品できますか？",
                  answer:
                    "法律や規約に違反する商品（偽ブランド品、医薬品、現金など）は出品できません。詳しくはメルカリの公式ガイドラインをご確認ください。",
                },
                {
                  question: "商品の発送はどうすればいいですか？",
                  answer:
                    "メルカリでは「らくらくメルカリ便」と「ゆうゆうメルカリ便」という便利な配送方法があります。コンビニや郵便局から簡単に発送できます。",
                },
                {
                  question: "売上金はどうやって受け取れますか？",
                  answer:
                    "売上金は、メルカリの売上金残高に保管されます。銀行口座への振込や、メルカリでの買い物に使用することができます。",
                },
                {
                  question: "トラブルが起きたらどうすればいいですか？",
                  answer:
                    "まずは相手と丁寧にコミュニケーションを取ってみましょう。解決しない場合は、メルカリの事務局に問い合わせることができます。",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  今すぐメルカリを始めましょう！
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-rose-100">
                  家にある不用品が誰かの宝物に。メルカリで簡単に出品して、お小遣い稼ぎを始めましょう。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="/mercari_manual.pdf" download>
              <Button size="lg" variant="secondary">
                  マニュアルをダウンロード
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                </a>
                <Button size="lg" className="bg-white text-rose-500 hover:bg-rose-100">
                  メルカリを始める
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
                  <p className="text-muted-foreground md:text-xl">
                    マニュアルについてのご質問や、メルカリの使い方でお困りのことがあれば、お気軽にお問い合わせください。
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>03-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>info@mercari-manual.example.com</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          姓
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="山田"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          名
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="太郎"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        メールアドレス
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="example@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        メッセージ
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="お問い合わせ内容をご記入ください"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">
                      送信する
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 メルカリ出品マニュアル. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              利用規約
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              サイトマップ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
