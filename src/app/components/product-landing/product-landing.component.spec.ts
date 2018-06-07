import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingComponent } from './product-landing.component';
import { ProductListStubComponent } from '../product-list/product-list.component.stub';
import { ProductStubComponent } from '../product/product.component.stub';
import { RecommendationListStubComponent } from '../recommendation-list/recommendation-list.component.stub';
import { RecommendationStubComponent } from '../recommendation/recommendation.component.stub';
import { ProductService } from '../../services/product.service';
import { routes } from 'src/app/routing/routes';
import { MainLandingComponent } from '../main-landing/main-landing.component';
import { SearchLandingStubComponent } from '../search-landing/search-landing.component.stub';
import { IProduct } from '../../interfaces/iProduct';
import { MockProductService } from '../../../assets/test/mocks/mock-product.service';
import { ActivatedRoute } from '@angular/router';
import { AppMaterialModule } from '../../app.material.module';

describe('ProductLandingComponent', () => {
  const product: IProduct = <IProduct>{
    'itemId': 42608125,
    'parentItemId': 42608125,
    'name': 'Apple iPod touch 32GB',
    'msrp': 247.0,
    'salePrice': 189.0,
    'upc': '888462353151',
    'categoryPath': 'Electronics/Portable Audio/Apple iPods/iPod Touch',
    'shortDescription': 'The Apple iPod Touch 32GB is loaded with features. It is the ideal solution for carrying your music collection in your pocket. The device comes in five stunning colors, giving you plenty of options to choose from. Listen to your favorite songs from Apple Music and iTunes. It also offers the ultimate mobile gaming experience for versatility. Take outstanding photos and videos with the new 8MP iSight camera and make video calls with the improved FaceTime HD camera. Use the Bluetooth iPod Touch to stay connected with messages and to use the most popular social networking apps. The 4&quot; retina display provides a quality viewing experience. It offers 1080p HD video recording and up to 40 hours of audio playback. With a sleek design and the ability to play your favorite tunes with just the touch of a button, it is wonderful for users on-the-go. It is equipped with 802.11ac Wi-Fi for Internet availability almost anywhere and Bluetooth 4.1 for hands-free use or pairing with other devices.',
    'longDescription': '&lt;b&gt;&lt;br&gt;Apple iPod touch 32GB:&lt;/b&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;Memory: 32 GB&lt;/li&gt;&lt;li&gt;Portable iPod touch has touchscreen controls&lt;/li&gt;&lt;li&gt;Bluetooth capable&lt;/li&gt;&lt;li&gt;Wireless LAN&lt;/li&gt;&lt;li&gt;Battery is built-in&lt;/li&gt;&lt;li&gt;4&quot; retina display&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback&lt;/li&gt;&lt;li&gt;8-hour video&lt;/li&gt;&lt;li&gt;8 Megapixel camera&lt;/li&gt;&lt;li&gt;Includes ear buds and charging cable&lt;/li&gt;&lt;li&gt;Available in Blue, Gold, Pink, White and Silver and Space Gray&lt;/li&gt;&lt;/ul&gt;',
    'thumbnailImage': '',
    'mediumImage': '',
    'largeImage': '',
    'productTrackingUrl': '',
    'standardShipRate': 0.0
  };
  let component: ProductLandingComponent;
  let fixture: ComponentFixture<ProductLandingComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule
      ],
      declarations: [
        ProductLandingComponent,
        ProductListStubComponent,
        ProductStubComponent,
        RecommendationListStubComponent,
        RecommendationStubComponent,
        MainLandingComponent,
        SearchLandingStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: ProductService, useValue: MockProductService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandingComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
