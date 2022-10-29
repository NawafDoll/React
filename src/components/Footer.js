import {
    Box,
    chakra,
    Container,
    Img,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  
  const Logo = () => {
    return (
      
        <Img height={"20"} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADNCAMAAABXRsaXAAABp1BMVEX///9EREQA7tJAQED4+PhHR0eBjv9DQ0M+Pj7y8vIA2/gA5uKmpqZnZ2cA3vJfof8A6ttbW1t5kv9smv8A2P4owP8A4+c7tv9zlv93d3dZpP9gYGAA4e0UzP++vr5lnv8I0v8yu/9TqP8exv9Dsf9LrP9QUFCIiv/r6+vJycmNjY21tbUA3PacnJzg4OAA7Ne1cP9xcXHAav8A5eSqd//LZP+dfv9/f3+Qhv+srKwayf/X19fExMSHh4e0cP+Tk5Pu/P64uf/y9P+aef/l6/+Mgf/Qx//KXv9L7+Dh+f259fXP+vmj7Pza8P/S2v+sx/+mvf+Ge/+i0f/JVP+6pv+I8up18+ed9O+b9e1b7enC+ffe/Puv8vlw6PSV7vhh5fnL8/9i1/644v+K3f5kyP+R2/5r4P216/6c4P6Azv9xtP+43f+eyv9bzv+g8PfG6/+HsP+TzP5jvv+UpP+lzv/z7f/a1f+/uv53qP+Ts/+tmv+pjf/r4f+xxP7Drf9/mP+8gf+3vv+jqf+blP/f0//Gmf/duv/bpv/dwv/Pjf/Ncv+kZ/92hf+ufAtRAAAc60lEQVR4nO2di0PTVvvHE5KQFlohIEIpVK4hbWmwitZausYKTgZU5k/n63SKzssmOqfM67yN6W7yR/+ec81JmgJToMXxxUHPaZKez7k853nOOX1fSdrTnva0Lbpc7wLUQxeaLta7CDsu50xTU9OFepdihzXX3oR0xql3QXZSVyaaiM7M1rsoO6f/Nbn6tt6F2Sl90yTqP2LTzkx4qP8TNm32TJOPuumbepdp2zV7ZgLJi32m3qXaZl1ub29H0IB9YW7iP4I9146o0c/EReqpNH32EzeGxpr4CaVFbLXehdsuzbW3Uub2r2jWhc++tedaWxn2HM+8+JljO61YCHxOyBZau25F2z7NMujWVq/vffEzxnaOtDJsf8DhYl+qS9G2UZcOHKHcDNqFd4ORz8xLu3QACXE7NOdbAfErjv2/upRum3QBMyOxFp7zhB3/4775V8EP2I366QDRkQPMen/bhHxxdxxf4K75Z7OGeOVAH6VeojlfTZAYxO3kFxn2xGeCPduHhKhZ952bYHKxLzVR7s/EWznQR7D7rtCMy8QrxdGXi32mvQnHYp/H/PUdg56nGbNn2gVxk+acIRFoU9NPdSrpFurqvn19+xD2dyzHA93eztfNLqMAFHPPBT9q92hpHxLidkiGc4a4pdgjx145x/62na6ztDv1KexWyRnfR7HZRH25tdX1yPFvNxi52E5t+y73yK9R6n1LPItju+LO6TfIyKHW3tXLxVdbxscx97yQGYDtsPfO0E4+sYuH9lILoR6/5smeaz3Sit3TVhaR8Mlq7jPo4+MtLZh7nC6KLdG+fPkIdVAROv7De/RXeDXRM5HvMs3vbyGi3RVgj3iwKbvotkkX2in3Lo1DlvYT6nE2qC8ht5RgzwnYRNz9PkOo2yecOpT507UfCajZoL5AXFPS8LN9fV5qPrQvE3d1YmJXeqbzGBr+OST9LXZLQaS1l/q8OsBd04t0+XhiF27yzu4naqH923H5CPZX+7zY7pTOdgp2oR1vGSDUt2m6D7mlyEvrG6fYd6iDzuXQSy/TZfOJXbfHOz8wQLAdkr7CPFPMTjKvkgT/xeOTi9W7BbtDA5T6Dkk6ffs8cnDud97MPj5ZXaKdfJcZtGv9A1jMfl+jnqkP+5oXe9yhl1+mbd2+qybt2YF+gr1E0vPjPu0j1eHwuhjfh17xPn4BQjHUzXfVctL1E/0Ym/knV8BXQT/jLeynhQDO+mqDDWS0VYIH9y4KvpYQNGg/z5ltqdJVcuk48d9wTcBfh97wFQm923fRAsP94WFMfcfNcvZXYZN3r7Ikwech6SWC3bprZq87XcMnEPd1MdO5hjw1+MH/sKu6hN+47a0Pvg3Gtn13yfq4c79reHj4xIn+JZK+Stvv9n6fCKHTQlOkNphXgxoba5eEnDe6EPXwMC2/s38/Nc3X/NjEkC95M5lB40suu6Oxu5CA2iHJ2wP7B66RfnsVXhI0j7s67+0B7DlX/QstjawbXUTfk+QSnrf3L+HEbYQ7MEB+o18k+xqvBsGdk9TWI7unsW8ODmLqMkneJk7afrLdMz/g1X4ytLH3OkD/DbAnXaU7/bvAjN8ZHMTYt0jyCgck83MVNs5dYin8m81ezhGK3fiHyG8OYnU5JHkbfDTsnPb300HswyaItz01Qe+VLuLlxF3Q2A+6u7sRNW1q7KUN9JNf1x2UNY8TxFHvZ666KlL388ZmRxwavbEfdRNshySvE9cUQ8IfnDvPcugvnLlEwhXcMfoH6N3Q2GgJtbW1wb3x6dFuLGbAT1CPnME7KPcHbybp+bdP8GpwXVmnlSwdt9YB5V/o3MjICKKeJknne3BOQf3kp//EMPZBEDavjxPDuEM7+8WaYM+jx3gONHSc7XSPYOwfec4doEJeOfJR8c8Syr093I8qA9cI4ONhi0wArwnW2Jf968aNqOWhUYQ9Mu1mOde7KDGFX0K514d5XcBbrI/TWgDxwOUSxW5ke3Z3FDQy8siTOT/s1QOUed+Thft4eZh3ieETS/TmObpZ0MAxyMIo1sgySc7SBlq4D345tHgX/UFumuOtCQdd94OQwUMvenzpgLPDLJvXvd6hIYTtkOT3XUv0jR8Hu0ShUTs7TGsCiTrt92mS1wPoJ3ps64rUqBoaQtRDD0kKuLp+dMjrG11V2AueHNztl2gCbuz6gT7TITsFjWvPltt6MfcCSd5B/vh9mljqGvRje2riJr7qvj9DIie30OFEZ4dpNqvFtl6EfZcmiUM+SAe5A70cxyXo1+Agwr4lYt9AFwntP7hEHzNHT+k16HHi8jOgBlHMBUo9yHr5rUFRqEv/KKRJuPJjF+kTkEHdO7oteMA9r9ZYWj7Y1gbcbTSwvtVNebpv0pwbXSL2EsQcYhrHK6yq4EoWoKN9oT53B7jR9PNBhN1GbZkziMMQ9Ku7+wbJW+jCkQmpjm5o7VmxHrAFEDoE889mx8neZ0MetCwfPIixaQcvd490u6JVsfCI5wA7NN6DQVwrKDWI7ZfjUnN7RjY9+/btPNPGqnR2Iu5nrGOWz40I3DcdnOncF6oCYd8S0rixf8DVMIh+HPqkeXomsxHXzxZ7MPbPbo56DgcjOB4ZeUSnsIfdQidwJOmmUDPofTwyiOi44GdR56WGk9oJ1KBlMXPh4QjjHhl5QPLO4QTRI0dacHsEueIcp+aRG934bEArXuno6UHcZW/2wqNRhjhKK2R5xNUjtOYkprBBQPWCeoRDH/Idwe7bOZrN6iSi7ul5TpMPebB5oxtHJAA/Sm3aDQH7IVmJoCKN7U1KaEfUfwS3QaSuEOpXJLkwNMoGsuQ8HGV6SI5WPkC1gCoCspYldWTU09izo0KVkCe0kMa+JjWYpt90dAB3B0VdHhodGnrEzNHC3SGKDQMZZwzxigDsBf56CN/+I+kccDV7+lV6wMPZSaRNqLLW0QzcnTR5bwjr7jJpXOccVMIoiscekXEvYj9AdcRqBb/J32Ld5Qo9fNxoc9fz5mZEvUpS5btDVHcrJOfBaC/NmF248cu9h+QCXBFDl8kaDBY2Byw5xCYEhxw9Hl/aebB19ftYMxJlXCDRF6i3d5TatXM8h703ympmocwqicTmy730fRa+SfTIdYPNXY/HxhB2ByX8hURfVHdJ7jIBBqLeIZ/u8r6BR7bbVdjzv6OnOOrBVltPjmPsFZp8LlK39bbdA9+zfK93feHK6P0F3c/7BYuzluj5DacudLX0dGYM6SRN9uLoy9XBtnuL9OUG6L29yNyVcSWA6IhBZ3G9h3UaQeqL46ix157Q9PTDts1r8ZlQGzRm+5km77FPIOd3Gou6/Otx0NiMu/rvLP+MQzCiNhKEokZHyUWBubdShryzbha2YA/wW5Bw6POukcNLDeWnTJ+awdgeJ3zhbO/BQJ09KyQq0uKzSlmqsFppa0NV59wlVTDEnjhPv1ng7DhbbZ0+NXPs+PGZ877shbMHO1H42Skydy6WxWSl0okwy/yaTtyracV0st5DDyo1FPXrU8eOHTs+85QmH7jv3Ov06xlE4ovT5WfwchGqBP49n5amPdUCqLP09S/0OexUWiNtBrxA1MdOnSap6R7UZ5Gcs1XQB6enOw/CW0D8XAVmiE57Kmghhr6Nfy+WpZ/Jy0X6CQ49o3e1LnyBKv+KqY+9JMllCENWXjmS9PIZCcSIAK+nE4KyxZ5ncFFnzzNVhZavLKJAzVc7PQfPnWU9g+r2gHAwryH0+C1pa5o8i1g7mhefi8xUK1K5owdilMWON2XpVccKik6mp6XnqFZ6Oul6TCeuICJuzug3KuqEGKB3k5OnEDdNPu9A6sH/OrzkHa8AteO5VOnoqEjTnR00HJ/u9NaNm+xkYdcd8p2KlsYJu959MYm4X5BUeaWjtqalyuITgG5+ha8j1JXqPsHFvTNyGLGlcb4A8xpBT06+JqnyCsScJPBs9kO/wTNRpRmau/yGpX/zXNbT00F7CR4ojFqix7KW6gEYqPeTWMyEN9cQqgWgLC82N6+SusEZlaq6EfUb+xBy7nDgTq1C7Ljeoh4++QU14dNra2O1wJtflZ80rzW/UaWVNZxeOyt10DoJgm9e49TXyYm0xpm6PnwBmpx8TJPl06vNa2NUzc3kHxd6XVZXaWqtUlkL6hb4vY6VV65nfxufRxu4HVyEnZf64dAhoH772M2afvJ6bI2T+9RckU6i99bW1ppPSqvBHWOteeXJtPgp8+RwZov/0+ulx4cPfQHcb30bAO9+Oz82E0AO0KtrY2urTyvT06r0pPoCqK7V36b9n/LghO97Q3XWyy8PHwLq99XvlF8+ffH72AwEZGPwg2Pw479PSydnxo6v4tXT8kkf8NjY76uvXpYD/nc6F4ZxY5/YbprN6t1RRH0ogBqp/PIJoH/99cwMop/5vSw9+Rr+woxUrpxsnkG1gSrkOLz7+/nTlela/8OkC/gbNP0nnO3C+Jf64zBWDWoi9eW7306ef/HrSUl6hSvgayz0auzX38+fPHn63eP17gc3pR+dQ+w/0Shuyp9fYuo/N7xQLT9B/z05ffr006dP4ffpJzC2Hz8O6tBVAmp8/nLpU4u7Rfrz6FGAPnp6mz/mPjmC1yhuyp9fHkXc/7x/uX2f4dy5Tr8m1igLhu8RNWruw3//tT2fsHDrZhf7mtgPG1++E1L/JtS4mx9+f3oDq/SvtfDDzW76xSGEfWuLH/+RotS0uQ8fPvT3RuZ483IWbtyk35+h2F0NQl1++38U+zDlPnzo/F9bAf7g3CP6jQoXe7BBqCXpr7+//JJiY+5Dhw9/+HD4/LtPsG7OwvKjodFRdoSJg3//YON7d0wv//wHgx8+ypv7i0MQkLz/K9C7XFfl8oNzeJOTHLEXsG9+X9749h1V+S/o6F+KvRwFYqC371//semBvlD55d7PvW1tdAObYyPu+43UzK5e/vkWc1Nq7JyTyHty8tTb869PPwn2w8rl8vR05ey9FbQl0HmQbvV5sR+dc3YeaJMqQ08/ysAJ9qFJTD156hT8d+zYr7++eHH+/OpJptXV1ZWVlTdvejrIWjA9jNrGDjQQ7nMLTr3R1pf67s9/wKa7o/sQbW26eow1gwMwstRC147IPoHLTZu7t/fRucbs2VV6/Mff/3zp6eYEe5JTHyd7oJybrZszbrKR2zt6b9mpN8y/0eN35/8hzf0FwubdnDT3zLEZjF2DmzT33XMPFjb+oIaT+u6P9y73pKe9Z4Kw2T5J57PFX6adehf/E1R+/O71+7eThz58+MLb3McotcuNxndP58ri2Uq50ablj1L58ct3f71+P/nhA4Y/hUX6OdLa2gxaLn1+8rfKy93YpzcSwn/3x2us8+fPw8yF1lQq7x5/Fo27pz3taU972tOe9rSnPe1pT/952QWr3kXYeUVMPfrZ/p/T1lLatG273oXYccVy2/VkNZnZ6T5kpzf5iUUtaeW3pXS5kLHD1KWQuclPLGihUMC4tpOqpE5ttuoCVdTiG98eTsLwsvNbM8ZS2ibreSoezRTCVdkFM1SSIkoo8gll2Ay1GguZlm2GolsyjWyaugBtGq6+NCNr8XBR1nKf0NibobY1TU4mQ5pZ+PjPcbVpaklKRvXq/pXUlKKU1pT8J5RhM9ThrGLaVlSJVXe3j1AQtWoV7IBipHUzYFQl02HUET6lDJsa11YeWtma2hLoAGo7E1UUJcBupbUg6i3Qpqg/WWGhwvzUdtGUNVlXEtW3fRT1Zu74JOqN7rTYBfmsaxK81GrelGUtm8kHzUS1qa1kJKCWoHozZsZN2VOZ4Ps3S21PRXIxjw1XI/G07xrvWLNjJr1BLSoaNz4eaisb0s0aRatJrU4VDTMUaMMLmsJmNCufNbVQYN2I1KqdTsWysVS66pOsdMzUZDnuobZCspe6YGopMZ0IGfSGcFbWdHaxSF2I62ap9nwYTF2IQe/QtGyQmbFNmVCr6bgOF8nBs7pLnYyZig6SFTPlfSB6gAzP8FFrmofajmtmaErIcKmh2eF2+p5AnQYfYL3ZMIg6nAtpulnM+kpDVaDUBVPRdCNlyKXAnsyok9GQrGjRWDFm6Jou1qNlwAPMVCKvrEsN7Sl7K0aghqBR02h/59RqJmRWNYWnkAK1St8Ix2TNiNhSXjeC6ou2ddLUtGjaUmN6sC9DqMMZ6AzRvB1WVTWcNjTNLY0dhfJmoMDJ0LrUGdlMlmRNGNoeauRSlbzUaV0zczG/csIod6nVUpY8q6TL2LyklUCfibS1Fdc0HFSl9MBxQKitmCJref4++GJxfkFO1+L4+VPrUtsh6MGWqRVrUUtRTS54qG1oELlausYHmEudUEqMirReQtHE0cSLgakzzHPL6NGa1PDxSk4sYERm1hf8Py1OPnldajWmoBkjpxnup/iok5qc8lBL6WyADJi8zaSfOiuTrIimkyaeCpzgKXWUFSOjB45+oI4WoD94Bz3UKOupeZmZwXWpEzIOTfKy0O981GpMM2wPtRoOkJXMwpCa8lIX2D1FtqSUlHXfvMlKHpHCtH6hknQjcFYsaqap6T6jYpk66z4Zmb1cjzocV/BraE+hJrzUYIDwDRtHH3lF03BhOXWEdnAYb1nyIllVaCybUpfYRwZHTECt6f7wRTV01n0iMnu5HnVaJoYApuwSv8BPXdDxqN9EzAUGP4au4dSpEC1iiY29GtS4rVVDi5HketSpqtw4r4iEJlMXbx1qNaqZeKkHzFmMI/mpLVmLSpuiVqGTo9IyajUr06pPazo1a+u0tRTT6KCvRZ3SRLPLlNWZNwuWjk6MyZDXHgI16xAQe2tKHKXirJYlVE2IWgA3sZFJCRNELUGTFSWBOirTYYbmpFgkEslDuWP5SJUyJrLeCbAMRXRVDObGUqpKJZiNS9V3x2Xuw8McbJRQXhG8A88HaFpqKoGV1YwouCjZdDgqXFTEFi4VTZHPLaWAGmVoZmJDRfGlnNpgbQ0dCOY2iEtlMEdKgHTkfqjFkCajFDZaAUK+atC9vFnDsRD6mFAoBi6a5xq4M0QkhxLhEjxLj4OD416AuhlMaXwmJu4ZtJIS2kCKFkIdOS1T6ri7cmKXsgYSVGGVhwMqkr41lYviqzQzHt20PNFVopiNRnNJKVPzAVnUElZGQ1xCCXD7TJFCEiHLUDI2IROP3rRJLIMa1YX4MWxZVjhpyik1SPQiFV8FM1chaHoMls/cqCRno8vtkgETv78AqiWIFnpjqfRW8oic7F9pSepVM0+AUjV8s62VVdiehZm0L77D5iZw5cy7TGMqn7J+XEs1GdV13/3XsgxfYFkwquLrQi6lSomYiJmj3s7WlaMIdiOZjQSTTcGHq5FsUHzwcUrIWtxtWxUiyZDv4WpcD6XDYNj5ZYWcImekrZRaVJSSFZflwBUaG+yanVRkI9D1/yjlwVLGMvl0Hv5lwImp4lHjEGgBtU6o7Qha/ilu7YBTi7JcQi5DUAiAQlWtkFS0YNf/45Q2YZ5lc6Yc0IhptMKV0alvWICZUilttSkrmODr5UOx4NYsKTk1nAttaf8Kp3NxEwTzWjYVuIjIf6Grs0ZqS7Zqan1QzTe22p6rNSbWQIV3YMra0572tKd/qcAAw3+F8FoKfF1DYcu2N+1YqCxGWLecQXk83387yvbeQxKqZ9k8WwDnzD2lQ84TpbL8VJEdy3IvopBlc6taKLnOXTjBl0ftTNYwjWgx0Ku38iVPGsLcaDyay1viJe78bLFyFjM8IFGLnpKjINQ7oSejUPJEtug+sxDDJwXCZgivEZAAH3zRUijLqfMhtJAQCfE16XRI5stYEXahmgspWf7cDD+DFFF0tL6gy0GuRwICfWHSt0qKjpYGFMVdE0WXcOcBLbHTBYJQnHrMKjiwbMUBe9H5kPhMdCQip0qWqfC6ULN4cQFceizNTOG/NnhB7vJcGkehBb6PhmIOvmWSZcsRBeTg8E/LyGSfS02h/RdwckvgZlZ5kmpMM4XtQeSAx0uJ5FTJkFkshy/h5QXqTCINysS4z6xG8ZJXhJYcLxWL5+ggnET7GsKxjIS7G4HuV3hwWU0NVUY7I8Rn3FEucNKSUoy51cmoMzyosVKyXBXFmVrE5KtKak7XaDe0c0pauISvftp8H0FNxulGghr1ec952d1twJWCqSF4SrEccQllfWopo9AjUgktXtRpbaZDlMRCgYFmMgJKDR3EXXXIK7JvsbgITn2M8cFYcIuvsoIUoSAxvkluCzzhKNmmCaLWhPEpE2ppisVNee+q7PrUhRBt1pRSTLL90xxrXoQfjvLiUeqULO4U5zTTu5JtQkSZZqcDrOqIHq+Ep6GYbONUpEbrvKVAat0weNAWNswo2blTcwr+a8W9W1nrU6t0I1Y1tYRlhJKkpOQvOjEXQaaNFY9QW3FdNNFJTfd8Hgy1MHQSWpkJTaleLkijPQJ+iZdaSuFNtmpqJZvX2aGBSCiVJ7RSQcEr7RnfsaT1qdEaGS57CKxSkQzyNNtwSMrIVFkas56EOql5V6HislgJ4SjuKCVqL0oBqwVwSQRfkgqintJQKoiar/nahmbzrpKSYRqydd/K2AbUCbJclEFVlyaDPMXGd1FJoWtyrG0JdULxmu2iZ48/SZowaRJrkJOzkl9T5JIC20L1UhcMZBPAXMWLOSKbUEehG5EqRPXFe6CNdjBSiu+g9AbU0J0T2JbncR0mcadPsOfhO6dkas8Iddp3+kJ8KqopXJpwlliDmByT/MrRaooq7HNEattARUFGms7WZBMaUcOUjDqAhaZYYdwp8YSp+VYFNqAGc1BUod6RSSLb6bizI0V0sskE00NaoPa3dUoR2rrADtmkyWcFtDWHpJdUt3UCU2czVBajlpL4qEUKsbvUaG1Kr1oZc6kzAnWebWnjpovoeFZIo0GeoRSqwc59RZSs6lInfSdjs7owdWVkahOgLOiqlFy1KRmR6WRuk0t81Ek6rjX/uEb2J6YX0ciwRWrkwGh+4yFQQ+n5LMKXyuAzpyTqjIGXZHPHbEox49E4KBqn9ozZcM9yuW0KBwHCpmbie+JRMgOlZdnX98IGXBIVLvFRRxQj2IYj6oIWKhTx/rRAHTaqT4oJ1AnhWG2OWVDUrREtTkT1tM32BsFF5SLF4/O1OLAz4nw9pWgmvwmVHoh8K64J8RL8IA+1ZWCvpwa1VJQh6Al7qVVDrtrQEajtED+rKGyjQ+/Os21i8EAjdOYDdyFdSGIVSP1z30wXDhkUNNnd00ZGgt2TNMkZC11YECa2w3+Jh7qoKcG+GaEGg0v2rDZPDdaTNrZa1N2zfLJpsr18FG3Q7pISgi3ouHlJ9MP56nHCFBu+oAm2NIUth+UeSAuXwHssaEKXL2F7KVAXYjoxTLWoIe4jjeKhrt68E6nB64/nrXA4GRPOl6gwbJl9Cmc16oNYhnhup4R9GTHmiucLlp3IaR7TVhIPw4M5J9OypsXStmXnoxq4LinZ9aZhVkfTEoyvyBQokS+aGj3WCNYsl5wiStgCtZWlx6o2aOuQ4LYkINTVTFPRQ4I/VZJdXzkDMSR+WloX7WISE8DMSMPuDA6uZV0PxcVI2gwJNRWOkQ9JGigWh3AZPlQNe76NoEaRdQFqHIBDBM6HIJqv+b48anWILjxYHurqbziohiH6AEVD12UzJrrOybjBbWDSMEhsHjNEP1PNmRlVihi8ndBaClRfbEo0VWnD47+kjSixi/msKeuygRZeIM9ziQmX2MTqx+PZXJoHqDEjzoRLlzZjHquYN7mVVKNG9V6Sb8XKAlvi+96EeAV7bVmeUCmMkmHLEnMiCplTVXa+0vM+Xiyjzw3bhWQBJwIvYbvv4j6FuCsfltxNeU+Bggm3WRk9lEvaU7FP+rrU7lPCCIE3WGvb7rOVlYka2e35euSe9rSnav0/hjXBhlOQE5AAAAAASUVORK5CYII=' />
  
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('blue.400','gray.800')}
        color={useColorModeValue('white')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text color={"white"}>© 2022 Tuwaiq Acadmy</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/TuwaiqAcademy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>
              T
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UC_pOwgeaVK7bg3z7fJB5N8w'}>
             YT
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.linkedin.com/company/tuwaiqacademy/?originalSubdomain=sa'}>
              ln
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }