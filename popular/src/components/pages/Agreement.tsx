import {memo, VFC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Text, UnorderedList, ListItem} from "@chakra-ui/react";
import Title from "../atoms/button/Title";
import ShareButton from "../molecules/ShareButton";

const Agreement: VFC = memo(() => {
	return (
		<>
			<Title>利用規約</Title>
			<Container>
				<Text py="4">
					この利用規約（以下，「本規約」といいます。）は，
					<SLink to="https://twitter.com/hx_kei">@hx_kei</SLink>
					（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
				</Text>
				<Text py="4">
					第1条（適用範囲）
					<Br />
					1.本規約は、本サービスの利用に関する当サービス提供者と登録ユーザー（第2条に定義）との間の権利義務関係を定めることを目的とし、登録ユーザーと当サービス提供者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
					<Br />
					2.当サービス提供者が当サービス提供者ウェブサイト（第2条に定義）上で随時掲載する本サービスに関するルール、諸規定等は本規約の一部を構成するものとします。
				</Text>
				<Text py="4">
					第2条（定義）
					<Br />
					本規約において使用する以下の用語は各々以下に定める意味を有するものとします。
					<UnorderedList>
						<ListItem mb="2">
							（1）「情報等」とは、第5条において定義された「情報等」を意味します。
						</ListItem>
						<ListItem mb="2">
							（2）「知的財産権」とは、著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権（それらの権利を取得し、又はそれらの権利につき登録等を出願する権利を含みます。）を意味します。
						</ListItem>
						<ListItem mb="2">
							（3）「当サービス提供者ウェブサイト」とは、そのドメインが「popular-32pe64nwja-an.a.run.app」である当サービス提供者が運営するウェブサイト（理由の如何を問わず当サービス提供者のウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。
						</ListItem>
						<ListItem mb="2">
							（4）「登録希望者」とは、第3条において定義された「登録希望者」を意味します。
						</ListItem>
						<ListItem mb="2">
							（5）「登録情報」とは、第3条において定義された「登録情報」を意味します。
						</ListItem>
						<ListItem mb="2">
							（6）「登録情報」とは、第3条において定義された「登録情報」を意味します。
						</ListItem>
						<ListItem mb="2">
							（7）「本サービス」とは、当サービス提供者が提供するpopularというフリー画像投稿サービス（理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。
						</ListItem>
						<ListItem mb="2">
							（8）「利用契約」とは、第3条第4項に定義される「利用契約」を意味します。
						</ListItem>
						<ListItem mb="2">
							（9）「外部SNSサービス」とは、Twitter、その他の他の事業者が提供している当サービス提供者所定のソーシャル・ネットワーキング・サービスで、登録ユーザーの認証、友人関係の開示、当該外部ソーシャル・ネットワーク内へのコンテンツの公開などの機能を持ち、本サービスの実施に利用されるサービスを意味します。
						</ListItem>
						<ListItem mb="2">
							（10）「外部SNS事業者」とは、外部SNSサービスのサービス提供者を意味します。
						</ListItem>
						<ListItem mb="2">
							（11）「外部SNS利用規約」とは、登録ユーザーと外部SNS事業者との権利関係を定める規約を意味します。
						</ListItem>
					</UnorderedList>
				</Text>
				<Text py="4">
					第3条（利用登録）
					<Br />
					1.本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当サービス提供者の定める一定の情報（以下「登録情報」といいます。）を当サービス提供者の定める方法で当サービス提供者に提供することにより、当サービス提供者に対し、本サービスの利用の登録を申請することができます。
					<Br />
					2.登録の申請は必ず本サービスを利用する個人又は法人自身が行わなければならず、原則として代理人による登録申請は認められません。また、登録希望者は、登録の申請にあたり、真実、正確かつ最新の情報を当サービス提供者に提供しなければなりません。
					<Br />
					3.当サービス提供者は、第1項に基づき利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
					<UnorderedList>
						<ListItem mb="2">
							（1）利用登録の申請に際して虚偽の事項を届け出た場合
						</ListItem>
						<ListItem mb="2">
							（2）本規約に違反したことがある者からの申請である場合
						</ListItem>
						<ListItem mb="2">
							（3）未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合
						</ListItem>
						<ListItem mb="2">
							（4）反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当サービス提供者が判断した場合
						</ListItem>
						<ListItem mb="2">
							（5）その他、当サービス提供者が利用登録を相当でないと判断した場合
						</ListItem>
					</UnorderedList>
				</Text>
				<Text py="4">
					第4条（本サービスの利用）
					<Br />
					1.登録ユーザーは、利用契約の有効期間中、本規約に従って、当サービス提供者の定める方法に従い、本サービスを利用することができます。
					<Br />
					2.本サービスによる通話機能は、警察機関、消防機関その他の機関への通話機能を提供するものではなく、登録ユーザーは当該用途に本サービスの通話機能を利用することはできません。
				</Text>
				<Text py="4">
					第5条（設備の負担等）
					<Br />
					1.本サービスの提供を受けるために必要な、コンピューター、スマートフォン、ソフトウェアその他の機器、通信回線その他の通信環境等の準備及び維持は、登録ユーザーの費用と責任において行うものとします。
					<Br />
					2.登録ユーザーは自己の本サービスの利用環境に応じて、コンピューター・ウィルスの感染の防止、不正アクセス及び情報漏洩の防止等のセキュリティ対策を自らの費用と責任において講じるものとします。
					<Br />
					3.当サービス提供者は、登録ユーザーが送受信した情報等（音声、画像、映像、文章その他一切の情報を含みます。）を運営上一定期間保存していた場合であっても、かかる情報を保存する義務を負うものではなく、当サービス提供者はいつでもこれらの情報を削除できるものとします。なお、当サービス提供者はかかる情報の削除に基づき登録ユーザーに生じた損害について一切の責任を負いません。
					<Br />
					4.登録ユーザーは、本サービスの利用開始に際し又は本サービスの利用中に、当サービス提供者ウェブサイトからのダウンロードその他の方法によりソフトウェア等を登録ユーザーのコンピューター、スマートフォン等にインストールする場合には、登録ユーザーが保有する情報の消滅若しくは改変又は機器の故障、損傷等が生じないよう十分な注意を払うものとし、当サービス提供者は登録ユーザーに発生したかかる損害について一切責任を負わないものとします。
				</Text>
				<Text py="4">
					第6条（禁止事項）
					<Br />
					登録ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
					<UnorderedList>
						<ListItem mb="2">（1）法令または公序良俗に違反する行為</ListItem>
						<ListItem mb="2">（2）犯罪行為に関連する行為</ListItem>
						<ListItem mb="2">
							（3）当サービス提供者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
						</ListItem>
						<ListItem mb="2">
							（4）当サービス提供者のサービスの運営を妨害するおそれのある行為
						</ListItem>
						<ListItem mb="2">
							（5）他のユーザーに関する個人情報等を収集または蓄積する行為
						</ListItem>
						<ListItem mb="2">（6）他のユーザーに成りすます行為</ListItem>
						<ListItem mb="2">
							（7）当サービス提供者のサービスに関連して、反社会的勢力等に対して直接または間接に利益を供与する行為
						</ListItem>
						<ListItem mb="2">
							（8）当サービス提供者、本サービスの他のユーザー、外部SNS事業者その他の第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為
						</ListItem>
						<ListItem mb="2">
							（9）過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引または助長する表現、その他反社会的な内容を含み他人に不快感を与える表現を、投稿または送信する行為
						</ListItem>
						<ListItem mb="2">
							（10）営業、宣伝、広告、勧誘、その他営利を目的とする行為（当サービス提供者の認めたものを除きます。）、性行為やわいせつな行為を目的とする行為、面識のない異性との出会いや交際を目的とする行為、本サービスの他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為、その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
						</ListItem>
						<ListItem mb="2">（11）宗教活動または宗教団体への勧誘行為</ListItem>
						<ListItem mb="2">
							（12）その他、当サービス提供者が不適切と判断する行為
						</ListItem>
					</UnorderedList>
				</Text>
				<Text py="4">
					第7条（本サービスの提供の停止等）
					<Br />
					1.当サービス提供者は、以下のいずれかの事由があると判断した場合、登録ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
					<UnorderedList>
						<ListItem mb="2">
							（1）本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
						</ListItem>
						<ListItem mb="2">
							（2）地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
						</ListItem>
						<ListItem mb="2">
							（3）コンピュータまたは通信回線等が事故により停止した場合
						</ListItem>
						<ListItem mb="2">
							（4）外部SNSサービスに、トラブル、サービス提供の中断又は停止、本サービスとの連携の停止、仕様変更等が生じた場合
						</ListItem>
						<ListItem mb="2">
							（5）その他、当サービス提供者が本サービスの提供が困難と判断した場合
						</ListItem>
					</UnorderedList>
					2.当サービス提供者は、本サービスの提供の停止または中断により、登録ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
				</Text>
				<Text py="4">
					第8条（著作権）
					<Br />
					1.登録ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た情報等のみ、本サービスで使用し、投稿または編集することができるものとします。
					<Br />
					2.登録ユーザーが本サービスを利用して投稿または編集した情報等の著作権については、当該登録ユーザーその他既存の権利者に留保されるものとします。ただし、当サービス提供者は、本サービスを利用して投稿または編集された情報等について、本サービスの運営及び宣伝等を目的として無償で自由に利用（複製、複写、改変、第三者への再許諾その他のあらゆる利用を含みます。）できるものとし、登録ユーザーは、この利用に関して、著作者人格権を行使しないものとし、登録ユーザーに権利を許諾した者に著作者人格権を行使させないものとします。
					<Br />
					3.前項本文に定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他知的財産権はすべて当サービス提供者または当サービス提供者にその利用を許諾した権利者に帰属し、登録ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。
				</Text>
				<Text py="4">
					第9条（利用制限および登録抹消）
					<Br />
					1.当サービス提供者は、以下の場合には、事前の通知なく、登録ユーザーが投稿した情報等を削除し、登録ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたは登録ユーザーとしての登録を抹消することができるものとします。
					<UnorderedList>
						<ListItem mb="2">
							（1）本規約又は外部SNS利用規約のいずれかの条項に違反した場合
						</ListItem>
						<ListItem mb="2">
							（2）登録情報に虚偽の事実があることが判明した場合
						</ListItem>
						<ListItem mb="2">
							（3）破産、民事再生、会社更生または特別清算の手続開始決定等の申立がなされたとき
						</ListItem>
						<ListItem mb="2">
							（4）半年間以上本サービスの利用がない場合
						</ListItem>
						<ListItem mb="2">
							（5）当サービス提供者からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合
						</ListItem>
						<ListItem mb="2">（6）第3条第3項各号に該当する場合</ListItem>
						<ListItem mb="2">
							（7）その他、当サービス提供者が本サービスの利用を適当でないと判断した場合
						</ListItem>
					</UnorderedList>
					2.前項各号のいずれかに該当した場合、登録ユーザーは、当然に当サービス提供者に対する一切の債務について期限の利益を失い、その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。
					<Br />
					3.当サービス提供者は、本条に基づき当サービス提供者が行った行為により登録ユーザーに生じた損害について、一切の責任を負いません。
				</Text>
				<Text py="4">
					第10条（保証の否認および免責事項）
					<Br />
					1.当サービス提供者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
					<Br />
					2.当サービス提供者は、本サービスに起因して登録ユーザーに生じたあらゆる損害について一切の責任を負いません。消費者契約法の適用その他の理由により当サービス提供者が登録ユーザーに対して損害賠償責任を負う場合においても、当サービス提供者の賠償責任は、損害の事由が生じた時点から遡って過去1ヶ月の期間に登録ユーザーから現実に受領した本サービスの利用料金の総額を上限とします。
					<Br />
					3.当サービス提供者は、本サービスに関して、登録ユーザーと他のユーザー、外部SNS事業者その他の第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
					<Br />
					4.本サービスは、外部SNSサービスと連携することがありますが、かかる連携を保証するものではなく、本サービスにおいて外部SNSサービスと連携できなかった場合でも、当サービス提供者は一切の責任を負いません。
					<Br />
					5.本サービスが外部SNSサービスと連携している場合において、登録ユーザーは外部SNS利用規約を自己の費用と責任で遵守するものとし、登録ユーザーと当該外部SNSサービスを運営する外部SNS事業者との間で紛争等が生じた場合でも、当サービス提供者は当該紛争等について一切の責任を負いません。
				</Text>
				<Text py="4">
					第11条（サービス内容の変更等）
					<Br />
					当サービス提供者は、登録ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって登録ユーザーに生じた損害について一切の責任を負いません。
				</Text>
				<Text py="4">
					第12条（利用規約の変更）
					<Br />
					1.当サービス提供者は、必要と判断した場合には、登録ユーザーに通知することなくいつでも本規約を変更することができるものとします。
					<Br />
					2.当サービス提供者は、本規約（当サービス提供者ウェブサイトに掲載する本サービスに関するルール、諸規定等を含みます。以下本項において同じ。）を変更できるものとします。当サービス提供者は、本規約を変更した場合には、登録ユーザーに当該変更内容を通知するものとし、当該変更内容の通知後、登録ユーザーが本サービスを利用した場合又は当サービス提供者の定める期間内に登録取消の手続をとらなかった場合には、登録ユーザーは、本規約の変更に同意したものとみなします。
				</Text>
				<Text py="4">
					第13条（通知または連絡）
					<Br />
					登録ユーザーと当サービス提供者との間の通知または連絡は、当サービス提供者の定める方法によって行うものとします。
				</Text>
				<Text py="4">
					第14条（権利義務の譲渡の禁止）
					<Br />
					1.登録ユーザーは、当サービス提供者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
					<Br />
					2.当サービス提供者は本サービスにかかる事業を第三者に譲渡（事業譲渡、会社分割その他態様の如何を問わないものとします。）した場合には、当該譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録情報その他の顧客情報を当該譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。
				</Text>
				<Text py="4">
					第15条（有効期間）
					<Br />
					利用契約は、登録ユーザーについて第3条に基づく登録が完了した日又は本規約に同意した日に効力を生じ、当該登録ユーザーの登録が取り消された日又は本サービスの提供が終了した日のいずれか早い日まで、当サービス提供者と登録ユーザーとの間で有効に存続するものとします。
				</Text>
				<Text py="4">
					第16条（存続規定）
					<Br />
					第5条、第7条第2項、第8条、第9条第2項及び第3項、第10条、第11条、第14条、第16条並びに第17条の規定は有効期間終了後も有効に存続するものとします。
				</Text>
				<Text py="4">
					第17条（準拠法・裁判管轄）
					<Br />
					本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サービス提供者の本店所在地を管轄する裁判所を専属的合意管轄とします。
				</Text>
				<Text pt="5">2021年7月28日 制定</Text>
			</Container>
			<ShareButton />
		</>
	);
});

const Container = styled.div`
	text-align: initial;
`;

const SLink = styled(Link)`
	color: #9d00ff;
`;

const Br = styled.br`
	display: block;
	content: "";
	margin-bottom: 0.5rem;
`;

export default Agreement;
